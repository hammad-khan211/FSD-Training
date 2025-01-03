// Function to greet a user
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to display a greeting message
  function displayGreeting() {
    const name = document.getElementById("nameInput").value; // Get input value
    const message = greet(name); // Call the greet function
    document.getElementById("greeting").innerText = message; // Display the greeting
  }
  
  // Function to display multiplication result
  function displayMultiplication() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2); // Call the multiply function
    document.getElementById("result").innerText = `Result: ${result}`;
  }
  

  
  

  
  