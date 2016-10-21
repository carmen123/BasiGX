#!/bin/sh

# run this script to generate javascript client tests
# for all of your existing classes.

# specify the basename of the component. After this basename, subfolders
# will be created. E.g. for Project.client.view.button.NiceButton the
# basename is Project.client and in $testBaseDir the folders view -> button
# will be created containing the testfile.
componentBaseName="BasiGX"

# don't touch this (calculates lenght of basename)
componentBaseNameCount=$(echo ${componentBaseName} | awk -F '.' '{print NF}')

# file with list of components with name like
# Project.client.view.button.NiceButton
# to create this list go to webapp folder and run e.g.
# $ grep -r "Ext.define('MoMo.client" | awk -F ':' '{print $2}'
componentList=basigx.list

# pattern includes basic existance tests
testpattern=most-basic-existance-test.pattern

# root directory where new tests will be created.
# If overwriting an existing test-directory, add "/* DoNotOverwrite */"
# in the first line of the tests you don't want to overwrite
testBaseDir="test/spec/"

# configure the place of a helper file which will generate the path and names
# of your new testfiles to copy-paste to your test index (e.g. load-tests,js)
indexHelper="$testBaseDir/../$componentList.indexhelper"


# looping through $componentFullNameList and creating test for each component
while read componentFullName
do

  echo $(tput setaf 2)
  echo "creating test for ${componentFullName}" $(tput setaf 7)

  #declaring variables
  componentShortName=$(echo ${componentFullName} | awk -F '.' '{print $NF}')

  #finding out which folders to create
  componentFullNameCount=$(echo ${componentFullName} | awk -F '.' '{print NF}')
  i=$((${componentBaseNameCount}+1))
  testFilePath=""
  while [ $i -lt ${componentFullNameCount} ]
  do

    PRINT='{print $'$i'}'
    partOfPath=$(echo ${componentFullName} | awk -F '.' "$PRINT")
    testFilePath=${testFilePath}${partOfPath}/
    i=$(($i+1))

  done

  #create these folders if not exist already
  mkdir -p ${testBaseDir}/${testFilePath}/

  #this will be the name and path of the new testfile
  createThisTestFile="${testBaseDir}/${testFilePath}/${componentFullName}.test.js"

  ##check if test already exists
  ##if your tests are created with this script, they have /* DoNotOverwrite */
  ##on top. Change it to /* DoOverwrite */ and outcomment the following if-
  ##statement to overwrite them.
  if [ -e ${createThisTestFile} ]
  then
      #step immediately to the next iteration
      continue
  fi

  ##incomment the following if-statement (and outomment the one above)
  ##if you want to overwrite your tests
  ##you can still control overwriting behaviour by setting /* DoOverwrite */
  ##or /* DoNotOverwrite */ on top of each testfile
  #if [ -e ${createThisTestFile} ]
  #then
  #  echo $(tput setaf 3)"         ${componentFullName}.test.js already exists." $(tput setaf 7)
  #  if grep -q "DoNotOverwrite" ${createThisTestFile}
  #  then
  #    echo $(tput setaf 3)"         Not overwriting" $(tput setaf 7)
  #    continue
  #  else
  #    echo $(tput setaf 1)"         Overwriting" $(tput setaf 7)
  #  fi
  #fi

  #resolving variables in testpattern and writing to file
  eval echo "$(cat ${testpattern})" > ${createThisTestFile}

  #generate helper file to copy paste testfiles to index
  echo "'${testFilePath}${componentFullName}.test.js'," >> ${indexHelper}


done < ${componentList}
