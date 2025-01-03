// date.js

// Function to display current date and time in various formats
function displayCurrentDate() {
    const currentDate = new Date();
  
    // ISO format
    const isoFormat = currentDate.toISOString();
  
    // UTC format
    const utcFormat = currentDate.toUTCString();
  
    // Locale date format (default browser locale)
    const localeDateFormat = currentDate.toLocaleDateString();
  
    // Locale time format (default browser locale)
    const localeTimeFormat = currentDate.toLocaleTimeString();
  
    // Custom format: YYYY-MM-DD HH:MM:SS
    const customFormat = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
  
    // Display all the formats
    document.getElementById("currentDate").innerHTML = `
      <p><strong>ISO Format:</strong> ${isoFormat}</p>
      <p><strong>UTC Format:</strong> ${utcFormat}</p>
      <p><strong>Locale Date Format:</strong> ${localeDateFormat}</p>
      <p><strong>Locale Time Format:</strong> ${localeTimeFormat}</p>
      <p><strong>Custom Format (YYYY-MM-DD HH:MM:SS):</strong> ${customFormat}</p>
    `;
  }
  
  // Function to calculate the difference between the current date and the user input date
  function calculateDateDifference() {
    const userDate = new Date(document.getElementById("userDateInput").value);
    const currentDate = new Date();
  
    const timeDifference = currentDate - userDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  
    document.getElementById("dateDifference").innerText = `Days Difference: ${daysDifference} days`;
  }
  