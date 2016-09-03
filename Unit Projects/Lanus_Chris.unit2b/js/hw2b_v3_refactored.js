/* hw2b.js */
"use strict";

// First we do a self-invoking function that contains everything - there will be nothing
//  exposed to the global scope.
(function(){

    var jArray = [];
    var jObject = {"jObject": jArray};

    // Build a constructor function that creates a new object record
    var Record = function(n, a, e){
      this.name = n;
      this.address = a;
      this.email = e;
    }

    function newObject(){
      //Step #1 - we get values from the form
      var name = document.getElementById("name").value;
      var address = document.getElementById("address").value;
      var email = document.getElementById("email").value;

      // Step #2 - you will create a new data object
      var newRecord = new Record(name, address, email);

      // Log and return new record
      console.log("New Record:")
      console.log(newRecord);
      return newRecord;
    }

    function pushIntoArray(dataObject){
      // Push new record to jArray
      jArray.push(dataObject);
      console.log("Stringified Array:")
      console.log(jArray);
    }

    function writeRowToPage(dataObject, element) {
        var s = "<div class=\"info\">";

        s+='<div class="nameDiv">';
        if (dataObject.name !== 'undefined') {
            s+=dataObject.name;
        }
        s+= '</div><div class="addrDiv">';
        if (dataObject.address !== 'undefined') {
            s+=dataObject.address;
        }
        s+= '</div><div class="emailDiv">';
        if (dataObject.email !== 'undefined') {
            s+=dataObject.email;
        }
        s+= '</div></div>';

        element.innerHTML += s;
    }

    function stringifyObject(){
      // Stringify jObject
      var stringObject = JSON.stringify(jObject);
      console.log("Stringified object:");
      console.log(stringObject);
      return stringObject;
    }

    function storeInLocalStorage(stringObj){
      // Store stringified object in local storage
      localStorage.setItem("storedRecords", stringObj);
    }

    function getlocalStorageData(){
      // Gets any existing local storage data, logs a stringified version of stored object
      var insideStorage = localStorage.getItem("storedRecords")
        console.log("Inside local storage:");
        console.log(insideStorage);
        return insideStorage;
    }

    function parseLocalStorage(storedJsonData){
      // Parses through the stringified local storage object, logs the parsed object
      var parseStorage = JSON.parse(storedJsonData);
        console.log("Parsing through local storage");
        console.log(parseStorage);
        return parseStorage;
    }

    function accessStoredArray(obj){
      // Accesses and logs the value -- in this case, an array -- that has the key of "jObject"
      // jObject is the original data structure - the JSON object - that contains all record data
      var storedArray = obj["jObject"];
        console.log("This is the stored array:");
        console.log(storedArray);
        return storedArray;
    }

    function writeStorageDataToPage(array){
      // iterate over the array. use the original constructor function to create a new object for each stored object.
      // write those stored records to the document, then push those records back into the original array in the data structure
      for (var i = 0; i<array.length; i++){
        var storedRecord = new Record(array[i].name, array[i].address, array[i].email);
          writeRowToPage(storedRecord, output);
          pushIntoArray(storedRecord);
        }
      console.log('The stored array is now stored in the original jObject:');
      console.log(jObject);
    }

    var button = document.getElementById("doit");
    button.onclick = function(){
        var theObject = newObject();
        var theStringifiedObject = stringifyObject();

        pushIntoArray(theObject);

        writeRowToPage(theObject, output);

        storeInLocalStorage(theStringifiedObject);
        getlocalStorageData();

    }

    window.onload = function(){
      var storedData = getlocalStorageData();
      var parsedData = parseLocalStorage(storedData);
      var theStoredArray = accessStoredArray(parsedData);
      writeStorageDataToPage(theStoredArray);




    }


})();
