/* Copyright (c) 2016 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 *  A grid showing results of the multisearch WFS search response values.
 *  inspired by BasiGX.view.container.WfsSearch
 *  This class is used by BasiGX.view.form.field.MultiSearchCombo
 *
 * @class BasiGX.view.grid.MultiSearchWFSSearchGrid
 */
Ext.define('BasiGX.view.grid.MultiSearchWFSSearchGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'basigx-grid-multisearchwfssearchgrid',

    requires: [
        'GeoExt.component.FeatureRenderer',
        'GeoExt.data.store.Features',
        'BasiGX.util.Map',
        'BasiGX.util.Layer',
        'BasiGX.util.Animate'
    ],

    viewModel: {
        data: {
            title: 'Objektsuche'
        }
    },

    bind: {
        title: '{title}'
    },

    store: null,

    cls: 'search-result-grid',

    searchResultVectorLayer: null,

    collapsible: true,

    titleCollapse: true,

    collapseDirection: 'top',

    headerPosition: 'left',

    hideHeaders: true,

    maxHeight: 180,

    config: {

        combo: null,

        minSearchTextChars: 3,

        typeDelay: 300,

        allowedFeatureTypeDataTypes: [
            'xsd:string'
        ],

        searchTerm: null,

        map: null,

        layer: null,

        searchResultFeatureStyle: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#4990D1'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            }),
            stroke: new ol.style.Stroke({
                color: '#4990D1',
                width: 4
            })
        }),

        searchResultHighlightFeatureStyle: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({
                        color: '#EE0000'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#fff',
                        width: 2
                    })
                }),
                stroke: new ol.style.Stroke({
                    color: '#EE0000',
                    width: 6
                })
            }),

        /**
         *
         */
        searchResultSelectFeatureStyle: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                    color: '#EE0000'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            }),
            stroke: new ol.style.Stroke({
                color: '#EE0000',
                width: 8
            })
        }),

        flashStyle: function() {
            return [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 5
                    })
            })];
        }

    },


    /**
    *
    */
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: 'Layer: {name}'
    }],

    /**
    *
    */
    columns: [
              // TODO gx_renderer doesn't render all features every time
//        {
//            xtype: 'widgetcolumn',
//            flex: 1,
//            widget: {
//                xtype: 'gx_renderer'
//            },
//            onWidgetAttach: function(column, gxRenderer, record) {
//                // update the symbolizer with the related feature
//                var feature = record.getFeature();
//                gxRenderer.update({
//                    feature: feature,
//                    symbolizers: this.up('grid').getSearchResultFeatureStyle()
//                });
//            }
//        },
        {
            text: 'Feature',
            dataIndex: 'displayfield',
            flex: 5,
            renderer: function(value) {
                return '<span data-qtip="' + value + '">' +
                value + '</span>';
            }
        }
    ],

    /**
    *
    */
    initComponent: function() {
        var me = this;

        me.callParent(arguments);

        me.map = BasiGX.util.Map.getMapComponent().getMap();

        if (!me.searchResultVectorLayer) {
            me.searchResultVectorLayer = new ol.layer.Vector({
                name: "Object Search Results",
                source: new ol.source.Vector(),
                style: me.getSearchResultFeatureStyle(),
                hoverable: false
            });

            var displayInLayerSwitcherKey =
                BasiGX.util.Layer.KEY_DISPLAY_IN_LAYERSWITCHER;
            me.searchResultVectorLayer.set(displayInLayerSwitcherKey, false);
            me.map.addLayer(me.searchResultVectorLayer);
        }

        var searchResultStore = Ext.create('GeoExt.data.store.Features', {
            map: me.map,
            layer: me.searchResultVectorLayer,
            groupField: 'featuretype'
        });

        me.setStore(searchResultStore);


        me.on('describeFeatureTypeResponse', me.getFeatures);
        me.on('getFeatureResponse', me.showSearchResults);

        // add listeners
        me.on('boxready', me.onBoxReady, me);
        me.on('itemmouseenter', me.highlightFeature, me);
        me.on('itemmouseleave', me.unhighlightFeature, me);
        me.on('itemclick', me.highlightSelectedFeature, me);
        // unregister listeners on grid hide
        me.on('hide', me.unregisterListeners, me);

    },



    /**
    *
    */
    describeFeatureTypes: function(searchterm, combo) {
        var me = this,
            typeNames = [],
            featureTypes;

        me.searchResultVectorLayer.getSource().clear();

        me.setSearchTerm(searchterm);

        me.setCombo(combo);

        var searchLayers = combo.getConfiguredSearchLayers();

        Ext.each(searchLayers, function(l) {
            if (l.getSource().getParams) {
                typeNames.push(l.getSource().getParams().LAYERS);
            }
        });

        var describeFeatureTypeParams = {
            REQUEST: "DescribeFeatureType",
            SERVICE: "WFS",
            VERSION: "1.1.0",
            OUTPUTFORMAT: "application/json",
            TYPENAME: typeNames.toString()
        };

        var url = combo.getWfsServerUrl() + "?";
        Ext.iterate(describeFeatureTypeParams, function(k, v) {
            url += k + "=" + v + "&";
        });

        me.setLoading(true);

        Ext.Ajax.request({
            url: url,
            success: function(response){
                me.setLoading(false);
                if(Ext.isString(response.responseText)) {
                    featureTypes = Ext.decode(response.responseText);
                } else if(Ext.isObject(response.responseText)) {
                    featureTypes = response.responseText;
                } else {
                    Ext.log.error("Error! Could not parse " +
                        "describe featuretype response!");
                }
                me.fireEvent('describeFeatureTypeResponse', featureTypes);
            },
            failure: function(response) {
                me.setLoading(false);
                Ext.log.error("Error on describe featuretype request:",
                    response);
            }
        });
    },

    /**
    *
    */
    getFeatures: function(resp) {
        var me = this;
        var featureTypes = resp.featureTypes;
        var cleanedFeatureType = me.cleanUpFeatureDataTypes(featureTypes);
        var url = me.getCombo().getWfsServerUrl();
        var xml = me.setupXmlPostBody(cleanedFeatureType);
        var features;

        me.setLoading(true);

        Ext.Ajax.request({
            url: url,
            method: 'POST',
            headers: BasiGX.util.CSRF.getHeader(),
            xmlData: xml,
            success: function(response){
                me.setLoading(false);
                if(Ext.isString(response.responseText)) {
                    features = Ext.decode(response.responseText).features;
                } else if(Ext.isObject(response.responseText)) {
                    features = response.responseText.features;
                } else {
                    Ext.log.error("Error! Could not parse " +
                        "GetFeature response!");
                }
                me.fireEvent('getFeatureResponse', features);
            },
            failure: function(response) {
                me.setLoading(false);
                Ext.log.error("Error on GetFeature request:",
                    response);
            }
        });
    },

    /**
    *
    */
    cleanUpFeatureDataTypes: function(featureTypes) {
        var me = this,
            cleanedFeatureType = [];
        Ext.each(featureTypes, function(ft, index) {
            cleanedFeatureType.push({
                typeName: ft.typeName,
                properties: []
            });

            Ext.each(ft.properties, function(prop) {
                if (Ext.Array.contains(
                    me.getAllowedFeatureTypeDataTypes(), prop.type) &&
                    prop.name.indexOf(" ") < 0) {
                        cleanedFeatureType[index].properties.push(prop);
                }
            });
        });
        return cleanedFeatureType;
    },

    /**
    *
    */
    setupXmlPostBody: function(featureTypes) {
        var me = this;

        var limitToBBox = me.getCombo().getLimitToBBox();

        var map = BasiGX.util.Map.getMapComponent().getMap();
        var projection = map.getView().getProjection().getCode();
        var bbox;
        var visibleExtent = map.getView().calculateExtent(map.getSize());
        var totalExtent = map.getView().getProjection().getExtent();

        if(limitToBBox){
            bbox = visibleExtent;
        } else {
            bbox = totalExtent;
        }

        var bboxll = bbox[0] + ' ' + bbox[1];
        var bboxur = bbox[2] + ' ' + bbox[3];

        var xml =
            '<wfs:GetFeature service="WFS" version="1.1.0" ' +
              'outputFormat="application/json" ' +
              'xmlns:wfs="http://www.opengis.net/wfs" ' +
              'xmlns:ogc="http://www.opengis.net/ogc" ' +
              'xmlns:gml="http://www.opengis.net/gml" ' +
              'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
              'xsi:schemaLocation="http://www.opengis.net/wfs ' +
              'http://schemas.opengis.net/wfs/1.1.0/WFS-basic.xsd">';

        Ext.each(featureTypes, function(ft) {
            Ext.each(ft.properties, function(prop) {
                xml +=
                    '<wfs:Query typeName="' + me.getCombo().getWfsPrefix() +
                           ft.typeName + '">' +
                     '<ogc:Filter>' +
                      '<ogc:And>' +
                       '<ogc:BBOX>' +
                        '<gml:Envelope srsName="' + projection + '">' +
                         '<gml:lowerCorner>' + bboxll + '</gml:lowerCorner>' +
                         '<gml:upperCorner>' + bboxur + '</gml:upperCorner>' +
                        '</gml:Envelope>' +
                       '</ogc:BBOX>' +
                       '<ogc:PropertyIsLike wildCard="*" singleChar="." escape="\\" matchCase="false">' +
                        '<ogc:PropertyName>' + prop.name + '</ogc:PropertyName>' +
                        '<ogc:Literal>*' + me.searchTerm + '*</ogc:Literal>' +
                       '</ogc:PropertyIsLike>' +
                      '</ogc:And>' +
                     '</ogc:Filter>' +
                   '</wfs:Query>';
            });
        });

        xml += '</wfs:GetFeature>';

        return xml;
    },

    /**
    *
    */
    showSearchResults: function(features) {

        var me = this,
            parser = new ol.format.GeoJSON();

        if (!features) {
            Ext.log.error("No feature found");
        } else {

            if(features.length > 0){
                me.show();
            }

            Ext.each(features, function(feature) {
                var featuretype = feature.id.split(".")[0];
                var displayfield;

                // find the matching value in order to display it
                Ext.iterate(feature.properties, function(k, v) {
                    if (v && v.toString().toLowerCase().indexOf(me.searchTerm) > -1) {
                        displayfield = v;
                        return false;
                    }
                });

                feature.properties.displayfield = displayfield;
                feature.properties.featuretype = featuretype;

                var olFeat = parser.readFeatures(feature, {
                    dataProjection: 'EPSG:32648',
                    featureProjection: 'EPSG:3857'
                })[0];
                me.searchResultVectorLayer.getSource().addFeature(olFeat);

            });
        }

    },

    /**
    *
    */
    onBoxReady: function(){
        var me = this;
        if(!me.getMap()){
            var map = BasiGX.util.Map.getMapComponent().getMap();
            me.setMap(map);
        }
        if(!me.getLayer()){
            var layer = new ol.layer.Vector({
                name: "me.getLayer layer",
                source: new ol.source.Vector()
            });
            var displayInLayerSwitcherKey =
                BasiGX.util.Layer.KEY_DISPLAY_IN_LAYERSWITCHER;
            layer.set(displayInLayerSwitcherKey, false);
            me.setLayer(layer);
            me.getMap().addLayer(layer);
        }
    },

    /**
    *
    */
    unregisterListeners: function() {
        var me = this;

        me.un('boxready', me.onBoxReady, me);
        me.un('itemmouseenter', me.highlightFeature, me);
        me.un('itemmouseleave', me.unhighlightFeature, me);
        me.un('itemclick', me.highlightSelectedFeature, me);

    },

    /**
    *
    */
    updateRenderer: function(item, style){
        var renderer = Ext.getCmp(
            Ext.query('div[id^=gx_renderer', true, item)[0].id);
        var src = renderer.map.getLayers().getArray()[0].getSource();
        src.getFeatures()[0].setStyle(style);
    },

    /**
    *
    */
    highlightFeature: function(tableView, record) {

        var me = this;
        var layer = me.getLayer();
        layer.getSource().clear();

        var feature = record.getFeature();

        if (feature) {
            this.flashListenerKey = BasiGX.util.Animate.flashFeature(
                feature, 1000);
            feature.setStyle(me.getSearchResultHighlightFeatureStyle());
            layer.getSource().addFeature(feature);
        }
    },

    /**
     *
     */
    unhighlightFeature: function(tableView, record) {

        var me = this;
        var layer = me.getLayer();
        layer.getSource().clear();

        var feature = record.getFeature();

        if (feature) {
            feature.setStyle(me.getSearchResultFeatureStyle());
        }

    },

    /**
     *
     */
    highlightSelectedFeature: function(tableView, record) {

        var me = this;
        var layer = me.getLayer();
        var feature = record.getFeature();
        var extent;
        var X;
        var Y;

        layer.getSource().clear();


        if (feature) {
            feature.setStyle(me.getSearchResultSelectFeatureStyle());
            layer.getSource().addFeature(feature);
            extent = feature.getGeometry().getExtent();
            X = extent[0] + (extent[2]-extent[0])/2;
            Y = extent[1] + (extent[3]-extent[1])/2;

            me.getMap().getView().setCenter([X, Y]);
        }

    }

});