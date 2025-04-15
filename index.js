// Array of country objects with name and image path
const countries = [
  { name: 'France', image: 'images/france.jpg' },
  { name: 'Morocco', image: 'images/morocco.jpg' }
];

// Select a random country on page load
let selectedCountry = countries[Math.floor(Math.random() * countries.length)];

// Update the image source to show the selected country's image
document.getElementById('country-image').src = selectedCountry.image;

// Keep track of the score
let score = 0;
document.getElementById('score').innerText = `Score: ${score}`;

// Function to check the user's guess
function checkGuess() {
  const userGuess = document.getElementById('guess').value.trim().toLowerCase();
  const feedbackElement = document.getElementById('feedback');

  if (userGuess === selectedCountry.name.toLowerCase()) {
    feedbackElement.innerText = "Correct! 🎉";
    score++;
  } else {
    feedbackElement.innerText = `Wrong! The correct answer was: ${selectedCountry.name}`;
  }

  // Update the score display
  document.getElementById('score').innerText = `Score: ${score}`;

  // After the guess, pick a new random country and update the image
  selectedCountry = countries[Math.floor(Math.random() * countries.length)];
  document.getElementById('country-image').src = selectedCountry.image;
  document.getElementById('guess').value = '';  // Clear the input field
}
