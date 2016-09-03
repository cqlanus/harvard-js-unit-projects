/*
  * Create your own Javascript file in the js directory of this project. Call it whatever you want.
  * Add a <script> tag to the page at the bottom that loads your new js file.
  * In your JS file:
        * Use document.getElementById() to get the textarea element from the page. You'll need its ID, which you can find in the HTML of this page.
        * Write an event handler function that runs every time someone types in the textarea. It will look something like this:
            myTextareaElement.onkeyup = function(){
            // your code goes here
            }
        * You'll want to access the .value property of the textarea to get the contents of the box as a String
        * Use String.split() to divide the string (at word boundaries) into an array of Strings
        * Count the elements in the array. This will be (roughly) the number of words in the box
        * Write that value into the HTML element that looks like this: <span id="wordcount"></span>
*/

// * get the HTML textarea element and the wordcount span
var myWordsToCount = document.getElementById('myWordsToCount');
var wordcount = document.getElementById('wordcount');

// * event handler that runs every time someone types into the textarea
myWordsToCount.onkeyup = function() {
  var theCount = 0;
  // get the text values from the textarea
  var theText = myWordsToCount.value;
  // use a regular expression to find extra whitespace and replace it with " "
  var expression = /\s+/g;
  theText = theText.replace(expression, ' ').trim();
  // split theText string into an array at every word boundary
  var theTextArray = theText.split(' ');
  // count the length of the array
  theCount = theTextArray.length;
  wordcount.innerHTML = theCount;
}
