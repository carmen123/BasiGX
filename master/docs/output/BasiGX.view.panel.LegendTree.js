Ext.data.JsonP.BasiGX_view_panel_LegendTree({"tagname":"class","name":"BasiGX.view.panel.LegendTree","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"LegendTree.js","href":"LegendTree.html#BasiGX-view-panel-LegendTree"}],"aliases":{"widget":["basigx-panel-legendtree"]},"alternateClassNames":[],"extends":"Ext.tree.Panel","mixins":[],"requires":["BasiGX.ux.RowExpanderWithComponents","Ext.app.ViewModel"],"uses":[],"members":[{"name":"allowDeselect","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-allowDeselect","meta":{"private":true}},{"name":"cls","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-cls","meta":{"private":true}},{"name":"collapseDirection","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-collapseDirection","meta":{"private":true}},{"name":"collapsed","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-collapsed","meta":{"private":true}},{"name":"collapsible","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-collapsible","meta":{"private":true}},{"name":"height","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-height","meta":{"private":true}},{"name":"hideCollapseTool","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-hideCollapseTool","meta":{"private":true}},{"name":"initiallyCollapsed","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-initiallyCollapsed","meta":{"private":true}},{"name":"layout","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-layout","meta":{"private":true}},{"name":"rootVisible","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-rootVisible","meta":{"private":true}},{"name":"rowBodyCompTemplate","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-rowBodyCompTemplate","meta":{}},{"name":"selModel","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-selModel","meta":{"private":true}},{"name":"titleAlign","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-titleAlign","meta":{"private":true}},{"name":"titleCollapse","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-titleCollapse","meta":{"private":true}},{"name":"viewConfig","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-viewConfig","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-viewModel","meta":{"private":true}},{"name":"width","tagname":"property","owner":"BasiGX.view.panel.LegendTree","id":"property-width","meta":{"private":true}},{"name":"expandAllBodies","tagname":"method","owner":"BasiGX.view.panel.LegendTree","id":"method-expandAllBodies","meta":{}},{"name":"getColorFromRow","tagname":"method","owner":"BasiGX.view.panel.LegendTree","id":"method-getColorFromRow","meta":{}},{"name":"getCssForRow","tagname":"method","owner":"BasiGX.view.panel.LegendTree","id":"method-getCssForRow","meta":{}},{"name":"initComponent","tagname":"method","owner":"BasiGX.view.panel.LegendTree","id":"method-initComponent","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.panel.LegendTree","component":false,"superclasses":["Ext.tree.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.tree.Panel<div class='subclass '><strong>BasiGX.view.panel.LegendTree</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.ux.RowExpanderWithComponents' rel='BasiGX.ux.RowExpanderWithComponents' class='docClass'>BasiGX.ux.RowExpanderWithComponents</a></div><div class='dependency'>Ext.app.ViewModel</div><h4>Files</h4><div class='dependency'><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree' target='_blank'>LegendTree.js</a></div></pre><div class='doc-contents'><p>LegendTree Panel</p>\n\n<p>Used to build a TreePanel with layer legends.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-allowDeselect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-allowDeselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-allowDeselect' class='name expandable'>allowDeselect</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'basigx-legend-panel'</code></p></div></div></div><div id='property-collapseDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-collapseDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-collapseDirection' class='name expandable'>collapseDirection</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'bottom'</code></p></div></div></div><div id='property-collapsed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-collapsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-collapsed' class='name expandable'>collapsed</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-collapsible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-collapsible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-collapsible' class='name expandable'>collapsible</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-height' class='name expandable'>height</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>300</code></p></div></div></div><div id='property-hideCollapseTool' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-hideCollapseTool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-hideCollapseTool' class='name expandable'>hideCollapseTool</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-initiallyCollapsed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-initiallyCollapsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-initiallyCollapsed' class='name expandable'>initiallyCollapsed</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-layout' class='name expandable'>layout</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='property-rootVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-rootVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-rootVisible' class='name expandable'>rootVisible</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-rowBodyCompTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-rowBodyCompTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-rowBodyCompTemplate' class='name expandable'>rowBodyCompTemplate</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This template will be used for every record. ...</div><div class='long'><p>This template will be used for every record. It can contain general\nExt JS Components. Text in \"{{ }}\" will be executed as JavaScript.</p>\n<p>Defaults to: <code>{xtype: 'container', items: [{xtype: 'image', src: '{{record.getOlLayer().get(&quot;legendUrl&quot;)}}', height: '{{record.getOlLayer().get(&quot;legendHeight&quot;)}}', alt: '{{record.getOlLayer().get(&quot;legendUrl&quot;)}}'}]}</code></p></div></div></div><div id='property-selModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-selModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-selModel' class='name expandable'>selModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mode: 'MULTI'}</code></p></div></div></div><div id='property-titleAlign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-titleAlign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-titleAlign' class='name expandable'>titleAlign</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'center'</code></p></div></div></div><div id='property-titleCollapse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-titleCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-titleCollapse' class='name expandable'>titleCollapse</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-viewConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-viewConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-viewConfig' class='name expandable'>viewConfig</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>adding custom method to get access to row styles</p>\n</div><div class='long'><p>adding custom method to get access to row styles</p>\n</div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {}}</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-property-width' class='name expandable'>width</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>250</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-expandAllBodies' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-method-expandAllBodies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-method-expandAllBodies' class='name expandable'>expandAllBodies</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Expands All RowBodies ...</div><div class='long'><p>Expands All RowBodies</p>\n</div></div></div><div id='method-getColorFromRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-method-getColorFromRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-method-getColorFromRow' class='name expandable'>getColorFromRow</a>( <span class='pre'>rec</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getCssForRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-method-getCssForRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-method-getCssForRow' class='name expandable'>getCssForRow</a>( <span class='pre'>rec</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Method gives access to the rows style. ...</div><div class='long'><p>Method gives access to the rows style.\nIf a layer is configured with property 'treeColor', the color will\nget applied here. Folders will inherit the color</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LegendTree'>BasiGX.view.panel.LegendTree</span><br/><a href='source/LegendTree.html#BasiGX-view-panel-LegendTree-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LegendTree-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Take care of the collapsed configuration. ...</div><div class='long'><p>Take care of the collapsed configuration.</p>\n\n<p>For some reason, for the legend panel we cannot have the configuration</p>\n\n<pre><code>{\n    collapsed: true,\n    hideCollapseTool: true\n}\n</code></pre>\n\n<p>because the the showing on header click does not work. We have this one\ntime listener, that tells us what we originally wanted.</p>\n</div></div></div></div></div></div></div>","meta":{}});