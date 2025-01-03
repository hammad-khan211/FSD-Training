// arrays.js

// Global array to store input elements
let array = [];

// Function to add an element to the array
function addToArray() {
  const newElement = document.getElementById("arrayInput").value;
  if (newElement !== "") {
    array.push(newElement);
    document.getElementById("arrayResult").innerText = `Array: [${array.join(", ")}]`;
    document.getElementById("arrayInput").value = ""; // Clear the input field
  }
}

// Function to remove the last element from the array
function removeFromArray() {
  array.pop();
  document.getElementById("arrayResult").innerText = `Array: [${array.join(", ")}]`;
}

// Function to display the length of the array
function displayArrayLength() {
  document.getElementById("lengthResult").innerText = `Array Length: ${array.length}`;
}

// Function to clear the array
function clearArray() {
  array = [];
  document.getElementById("arrayResult").innerText = "Array: []";
  document.getElementById("lengthResult").innerText = "Array Length: 0";
}
