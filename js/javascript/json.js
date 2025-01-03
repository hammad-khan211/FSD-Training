// json.js

// JSON data representing users
const usersJSON = `
[
  { "name": "Alice", "age": 25, "city": "New York" },
  { "name": "Bob", "age": 30, "city": "San Francisco" },
  { "name": "Charlie", "age": 35, "city": "Chicago" }
]`;

// Function to parse and display JSON data
function displayUsers() {
  // Parse JSON string into an array of objects
  const users = JSON.parse(usersJSON);
  
  let result = "<ul>";
  users.forEach(user => {
    result += `<li>${user.name}, Age: ${user.age}, City: ${user.city}</li>`;
  });
  result += "</ul>";
  
  document.getElementById("outputJSON").innerHTML = result;
}

// Function to add a new user to the JSON data
function addUser() {
  const newUser = {
    name: document.getElementById("nameInput").value,
    age: parseInt(document.getElementById("ageInput").value),
    city: document.getElementById("cityInput").value
  };

  // Parse the existing JSON, add the new user, and convert back to JSON string
  let users = JSON.parse(usersJSON);
  users.push(newUser);

  let updatedResult = "<ul>";
  users.forEach(user => {
    updatedResult += `<li>${user.name}, Age: ${user.age}, City: ${user.city}</li>`;
  });
  updatedResult += "</ul>";

  document.getElementById("outputJSON").innerHTML = updatedResult;
}
