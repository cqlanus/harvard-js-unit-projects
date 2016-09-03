/* hw3a.js  */

// your solution here
var theDiv = document.getElementById('transcriptText');
var transcriptText = theDiv.textContent;


function trimWhitespace (str){
  var expression = /\s+/g;
  str = str.replace(expression, ' ').trim();
  console.log(str);
  return str;
}

function splitTextContent(str) {
  var transcriptArray = str.split(' ');
  console.log(transcriptArray);
  return transcriptArray;
}

function buildSpanTags(array){
  var spanTagArray = [];
  for (var i = 0; i<array.length; i++){
    // Build SPAN elements as you go, along with the attributes as shown in the example
    var spanTag = document.createElement("SPAN");
    var spanText = document.createTextNode(array[i] + ' ');
    spanTag.appendChild(spanText);

    spanTag.setAttribute('class', 'word');
    spanTag.setAttribute('id', 'word'+(i+7));

    spanTagArray.push(spanTag);

    // Add the SPAN elements to the original DIV
  }
    return spanTagArray;
}

function clearTheDiv(){
  theDiv.innerHTML = '';
}

function replaceTextWithSpans(str){
  var trimmedString = trimWhitespace(str);
  var array = splitTextContent(trimmedString);
  var spanTags = buildSpanTags(array);
  clearTheDiv();

  for (var i = 0; i < array.length; i++){
    theDiv.appendChild(spanTags[i]);
  }
}

function transformTheTranscript(){
  var divideTranscript = document.getElementById('divideTranscript');
  divideTranscript.onclick = function(){
    replaceTextWithSpans(transcriptText);
    highlightText();
  };
}

function highlightText(){
  var spanTags = document.getElementsByTagName('SPAN');

  for (var i = 0; i < spanTags.length; i++){
    var theSpan = spanTags[i];

    // event handler on spanTags to highlight on mouseover
    // use a closure and self-invoking function to accomplish this
    theSpan.onmouseover = (function(evt){
      return function(evt){
        evt.currentTarget.style.backgroundColor = 'yellow';
      }
    })();
  }
};


window.onload = function(){
  transformTheTranscript();
};
