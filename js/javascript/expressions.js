// expressions.js

// Function to evaluate and display the result of the expression
function evaluateExpression() {
    const expression = document.getElementById("expressionInput").value;
  
    try {
      // Evaluate the expression
      const result = eval(expression);
  
      // Display the result
      document.getElementById("outputExpression").innerText = `Result: ${result}`;
    } catch (error) {
      // Handle invalid expressions
      document.getElementById("outputExpression").innerText = "Error: Invalid Expression";
    }
  }
  