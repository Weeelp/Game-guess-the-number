'use strict';
const guessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
// document.querySelector('.score').textContent = 19000000;
// document.querySelector('.number-input').value = 3; //в инпутах значение через валю
let score = document.querySelector('.score').textContent;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    guessMessage('Введите число!');
  } else if (guessingNumber === secretNumber) {
    guessMessage('Правильно');
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;
    if (
      Number(document.querySelector('.score').textContent) >
      Number(document.querySelector('.highscore').textContent)
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 0) {
      guessMessage(
        guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#d31414';
      guessMessage('Game over');
    }
  }
  //   else if (guessingNumber > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.guess-message').textContent = 'Слишком много';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('body').style.backgroundColor = '#d31414';
  //       document.querySelector('.guess-message').textContent = 'Game over';
  //     }
  //   } else if (guessingNumber < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.guess-message').textContent = 'Слишком мало';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('body').style.backgroundColor = '#d31414';
  //       document.querySelector('.guess-message').textContent = 'Game over';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  guessMessage('Введите число!');
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});
