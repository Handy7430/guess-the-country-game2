let countries = [];
let currentCountry = {};
let score = 0;

window.onload = function () {
    fetch('countries.json')
        .then(response => response.json())
        .then(data => {
            countries = data;
            loadNextCountry();
        });

    document.getElementById('submit-guess').onclick = checkGuess;
    document.getElementById('next-country').onclick = loadNextCountry;
};

function loadNextCountry() {
    // Randomly select a country from the array
    currentCountry = countries[Math.floor(Math.random() * countries.length)];

    // Update the image source and clear the input/feedback
    document.getElementById('country-image').src = currentCountry.image;
    document.getElementById('guess-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-country').style.display = 'none';
}

function checkGuess() {
    let userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    if (userGuess === currentCountry.name.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct! 🎉";
        score++;
        document.getElementById('score').textContent = "Score: " + score;
    } else {
        document.getElementById('feedback').textContent = "Wrong! The correct answer was: " + currentCountry.name;
    }
    document.getElementById('next-country').style.display = 'block';
}
