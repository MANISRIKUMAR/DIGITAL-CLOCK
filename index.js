function updateClock() {
    const now = new Date();
  
    // Get hours, minutes, and seconds
    const hours24 = now.getHours();
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const meridian = hours24 >= 12 ? 'PM' : 'AM';
  
    // Format time strings
    const time12 = `${hours12}:${minutes}:${seconds} ${meridian}`;
    const time24 = `${hours24}:${minutes}:${seconds}`;
  
    // Update the HTML elements
    document.getElementById('clock').textContent = `12-Hour Format: ${time12}`;
    document.getElementById('time24').textContent = `24-Hour Format: ${time24}`;
  }
  
  // Function to speak the current time
  function speakTime() {
    const now = new Date();
  
    // Get hours and minutes
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    // Determine AM or PM
    const meridian = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
  
    // Construct the time string
    const timeString = `The time is ${hours12} ${minutes > 0 ? `and ${minutes}` : ''} ${meridian}`;
  
    // Use Web Speech API to speak the time
    const utterance = new SpeechSynthesisUtterance(timeString);
    window.speechSynthesis.speak(utterance);
  }
  
  // Attach event listener to a button
  document.getElementById('speak-button').addEventListener('click', speakTime);
  
  // Call the function and update every second
  updateClock();
  setInterval(updateClock, 1000);
  