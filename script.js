let countries = [];
let currentCountry = null;
let score = 0;

async function loadCountries() {
  const response = await fetch("countries.json");
  countries = await response.json();
  loadRandomCountry();
}

function loadRandomCountry() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  currentCountry = countries[randomIndex];
  document.getElementById("country-image").src = currentCountry.image;
  document.getElementById("guess-input").value = "";
  document.getElementById("feedback-text").innerText = "";
}

function checkGuess() {
  const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
  const correctAnswer = currentCountry.name.toLowerCase();
  
  if (userGuess === correctAnswer) {
    score++;
    document.getElementById("feedback-text").innerText = "✅ Correct!";
  } else {
    document.getElementById("feedback-text").innerText = `❌ Wrong! It was ${currentCountry.name}`;
  }
  document.getElementById("score-text").innerText = `Score: ${score}`;
}

document.getElementById("submit-button").addEventListener("click", checkGuess);
document.getElementById("next-button").addEventListener("click", loadRandomCountry);

loadCountries();
