/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

 function twelveEvenFibonacciSum(){
 /// WRITE YOUR CODE here
 // * generate an array of the first 12 numbers in the Fibonacci sequence
    var fibArray = [0, 1];
    var a = 0;
    var b = 1;
    var c = '';
    // * assign c the sum of a and b
    // * push c onto the end of the array starter
    // * reassign variables a and b to prep for next iteration
      for (var i =0; fibArray.length < 12; i++) {
        c = a + b;
        fibArray.push(c);
        a = b;
        b = c;
      }
      console.log(fibArray);

    // * iterate through fibArray and sum only the even integers
    var fibSum = 0;
    for (var i = 0; i<fibArray.length; i++) {
      if (fibArray[i]%2 == 0) {
        fibSum += fibArray[i];
      }
    }
    console.log(fibSum);
    return fibSum;

 }
