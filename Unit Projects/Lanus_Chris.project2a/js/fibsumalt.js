var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

function twelveEvenFibonacciSum(){
    var max = 11; // start at 1 - 1 since we are using a while loop
                  // -vs- having to check for 12 then break out of the loop
    var firstAddend = 0;
    var secondAddend = 1;
    var sum = 0;
    var count = 0;
    var result = 0;

    while (count < max) {
        sum = firstAddend + secondAddend;
        firstAddend = secondAddend;
        secondAddend = sum;

        // check if even
        if (sum % 2 == 0) {
            result += sum; // add current sum to the final total
            count++; // bump count for next loop
        }
    }
    return result;
}
