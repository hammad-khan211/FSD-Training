// datatypes.js

// Function to check the data type of the input value
function checkDataType() {
    const userInput = document.getElementById("userInput").value;
  
    // Check if the input is a number
    if (!isNaN(userInput)) {
      const num = parseFloat(userInput);
      document.getElementById("dataTypeResult").innerText = `The data type is: Number\nValue: ${num}`;
    }
    // Check if the input is a boolean
    else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
      const bool = (userInput.toLowerCase() === "true");
      document.getElementById("dataTypeResult").innerText = `The data type is: Boolean\nValue: ${bool}`;
    }
    // Check if the input is an object (JSON)
    else if (userInput.trim().startsWith("{") && userInput.trim().endsWith("}")) {
      try {
        const jsonObj = JSON.parse(userInput);
        document.getElementById("dataTypeResult").innerText = `The data type is: Object\nValue: ${JSON.stringify(jsonObj)}`;
      } catch (error) {
        document.getElementById("dataTypeResult").innerText = `Error: Invalid Object Syntax`;
      }
    }
    // Check if the input is a string
    else {
      document.getElementById("dataTypeResult").innerText = `The data type is: String\nValue: "${userInput}"`;
    }
  }
  