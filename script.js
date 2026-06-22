'use strict';
// PROJECT #1 Guess my number
// console.log(document.querySelector('.message').textContent);
// selecting and manipulating element
// document.querySelector('.message').textContent = 'Correct Number 🎉';
// document.querySelector('.guess').value;
// Implementing the Game Logic

// 1. State variables defined OUTSIDE the click event so they persist
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Scenario A: No input or invalid input
  if (!guess || guess < 1 || guess > 20) {
    document.querySelector('.alert').textContent =
      'Please guess a number between 1 - 20';
    return; // Stop execution early for invalid input
  }

  // Clear previous alert if input is valid
  document.querySelector('.alert').textContent = '';

  // Scenario B: Player wins 🥇
  if (guess === secretNumber) {
    document.querySelector('.alert').textContent =
      'Congrats your guess is correct 🎉';
    document.querySelector('.number').textContent = secretNumber;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // update high score
    highScore++;
    document.querySelector('.highScore').textContent = highScore;
  }

  // Scenario C: Guess is wrong
  else {
    if (score > 1) {
      // Ternary operator to check if high or low
      document.querySelector('.alert').textContent =
        guess > secretNumber ? 'Your guess is high 📈' : 'Your guess is low 📉';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
    } else {
      // Player lost the game
      document.querySelector('.score').textContent = 0;
      document.querySelector('.highScore').textContent = 0;
      document.querySelector('.alert').textContent = 'You lost the game! 💥';
      document.querySelector('body').style.backgroundColor = '#b34747';
    }
  }

  // Clear input field for the next guess
  document.querySelector('.guess').value = '';
});

// Play again
document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highScore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.alert').textContent = '';
});
