// introduction.js

// Function to display the user's introduction
function displayIntroduction() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const city = document.getElementById("cityInput").value;
    const hobby = document.getElementById("hobbyInput").value;
  
    // Generate the introduction
    const introduction = `Hello! My name is ${name}. I am ${age} years old, and I live in ${city}. My favorite hobby is ${hobby}.`;
  
    // Display the introduction on the page
    document.getElementById("outputIntroduction").innerText = introduction;
  }
  