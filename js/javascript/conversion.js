// conversions.js

// Function to convert temperature between Celsius and Fahrenheit
function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("tempValue").value);
    const tempUnit = document.getElementById("tempUnit").value;
    
    let result;
    if (tempUnit === "Celsius") {
      result = (tempValue * 9/5) + 32; // Convert Celsius to Fahrenheit
      document.getElementById("tempResult").innerText = `${tempValue} °C = ${result.toFixed(2)} °F`;
    } else if (tempUnit === "Fahrenheit") {
      result = (tempValue - 32) * 5/9; // Convert Fahrenheit to Celsius
      document.getElementById("tempResult").innerText = `${tempValue} °F = ${result.toFixed(2)} °C`;
    }
  }
  
  // Function to convert length between meters and kilometers
  function convertLength() {
    const lengthValue = parseFloat(document.getElementById("lengthValue").value);
    const lengthUnit = document.getElementById("lengthUnit").value;
  
    let result;
    if (lengthUnit === "Meters") {
      result = lengthValue / 1000; // Convert meters to kilometers
      document.getElementById("lengthResult").innerText = `${lengthValue} m = ${result.toFixed(3)} km`;
    } else if (lengthUnit === "Kilometers") {
      result = lengthValue * 1000; // Convert kilometers to meters
      document.getElementById("lengthResult").innerText = `${lengthValue} km = ${result.toFixed(0)} m`;
    }
  }
  
  // Function to convert weight between kilograms and pounds
  function convertWeight() {
    const weightValue = parseFloat(document.getElementById("weightValue").value);
    const weightUnit = document.getElementById("weightUnit").value;
  
    let result;
    if (weightUnit === "Kilograms") {
      result = weightValue * 2.20462; // Convert kilograms to pounds
      document.getElementById("weightResult").innerText = `${weightValue} kg = ${result.toFixed(2)} lbs`;
    } else if (weightUnit === "Pounds") {
      result = weightValue / 2.20462; // Convert pounds to kilograms
      document.getElementById("weightResult").innerText = `${weightValue} lbs = ${result.toFixed(2)} kg`;
    }
  }
  