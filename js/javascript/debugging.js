// debugging.js

// Function to simulate and debug code
function debugCode() {
    const codeSnippet = document.getElementById("codeInput").value;
  
    try {
      // Evaluate the code snippet
      const result = eval(codeSnippet);
      document.getElementById("outputDebugging").innerText = `Result: ${result}`;
    } catch (error) {
      // Catch and display errors
      document.getElementById("outputDebugging").innerText = `Error: ${error.message}`;
    }
  }
  