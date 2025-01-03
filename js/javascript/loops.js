// loops.js

// Function to generate numbers using a for loop
function generateNumbers() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += `Number: ${i}<br>`;
    }
    document.getElementById("outputForLoop").innerHTML = result;
  }
  
  // Function to calculate the sum of an array using a for...of loop
  function sumArray() {
    const numbers = [5, 10, 15, 20];
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    document.getElementById("outputForOfLoop").innerHTML = `Sum of array: ${sum}`;
  }
  
  // Function to display object properties using a for...in loop
  function displayObjectProperties() {
    const person = { name: "Alice", age: 25, city: "New York" };
    let result = "";
    for (const key in person) {
      result += `${key}: ${person[key]}<br>`;
    }
    document.getElementById("outputForInLoop").innerHTML = result;
  }
  