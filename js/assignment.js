"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {

    
    const num = 3;
    if (num %2 === 0) {
    console.log("even")
    }
    else {console.log ("odd")}


    // Write the logic to decide if the variable "num" is even or odd
    // and set the element's value the string "Even" or "Odd" accordingly

}
function SumTheNumbers() {
    

let sum = 0;
  for (let i = 0; i <= 10; i++) {
      sum = sum + i; 
      
  }
  console.log(sum)
    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page

}

function createNumberArray() {
    const numberArray = [];
    
    for ( let i = 0; i <= 10; i++) {
      numberArray.push(i);
      console.log(numberArray)
    }
    
    console.log(numberArray); 
    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page

}

function render() {
    // Call the created functions
evenOrOdd();
SumTheNumbers();
createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});
