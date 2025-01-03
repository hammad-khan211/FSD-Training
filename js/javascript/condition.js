// condition.js

// Function to check if the number is positive, negative, or zero
function checkCondition() {
    const num = parseFloat(document.getElementById("userInput").value);
    
    let result = '';
    
    if (num > 0) {
      result = `${num} is a Positive Number.`;
    } else if (num < 0) {
      result = `${num} is a Negative Number.`;
    } else {
      result = `${num} is Zero.`;
    }
    
    document.getElementById("conditionResult").innerText = result;
  }
  