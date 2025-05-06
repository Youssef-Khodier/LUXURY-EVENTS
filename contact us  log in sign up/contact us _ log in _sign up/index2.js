// Navigation buttons functionality
document.getElementById('signIn').addEventListener('click', function() {
  window.location.href = './log in .html';
});

document.getElementById('contactUs').addEventListener('click', function() {
  window.location.href = './contact us .html';
});


document.getElementById('continue-button').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission
  window.location.href = '../../index.html';
});



