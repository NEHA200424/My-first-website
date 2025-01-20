// Alert on page load
window.onload = function() {
    alert('Welcome to the Cake Shop!');
  };
  
  // Show today's date
  const dateElement = document.getElementById('currentDate');
  const currentDate = new Date().toLocaleDateString();
  dateElement.textContent = `Today's Date: ${currentDate}`;
  