'use strict';
// PROJECT #1 Guess my number
// console.log(document.querySelector('.message').textContent);
// selecting and manipulating element
// document.querySelector('.message').textContent = 'Correct Number 🎉';
// document.querySelector('.guess').value;
// Implementing the Game Logic

document.querySelector('.check').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  let highScore = Number(document.querySelector('.highScore').textContent);

  const guess = Number(document.querySelector('.guess').value);

  //   when not valid number
  if (!guess || guess < 0) {
    document.querySelector('.alert').textContent =
      `Please guess number between 1 - 20`;
  } else if (guess) {
    document.querySelector('.alert').textContent = '';

    // player when win 🥇
    if (secretNumber === guess) {
      document.querySelector('.alert').textContent =
        'Congrats your guess is correct 🎉';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      highScore++;
      document.querySelector('.highScore').textContent = highScore;
    }

    // when guess is low
    else if (secretNumber > guess) {
      document.querySelector('.alert').textContent = 'Your guess is low';
    }

    // when guess too high
    else if (secretNumber < guess) {
      document.querySelector('.alert').textContent = 'Your guess is high';
    }

    // checking score
    let score = Number(document.querySelector('.score').textContent);

    // when highScore more than 3
    if (score === 1 && highScore > 3) {
      document.querySelector('.alert').textContent = 'Good try!';
    }

    // when player lost game
    else if (score === 1 && highScore < 1) {
      document.querySelector('.alert').textContent = 'Your lost the game!';
    }

    // reset game when score 0
    else if (score === 1) {
      document.querySelector('.score').textContent = 20;
      document.querySelector('.highScore').textContent = 0;
    }

    // decrease when valid number
    else if (score > 0 || score < 20) {
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  document.querySelector('.guess').value = '';
});
