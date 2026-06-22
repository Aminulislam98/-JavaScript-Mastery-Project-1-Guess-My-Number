'use strict';
// PROJECT #1 Guess my number
// console.log(document.querySelector('.message').textContent);
// selecting and manipulating element
// document.querySelector('.message').textContent = 'Correct Number 🎉';
// document.querySelector('.guess').value;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  !guess
    ? (document.querySelector('.alert').textContent =
        `Please guess number between 1 - 20`)
    : (document.querySelector('.alert').textContent = '');
});
