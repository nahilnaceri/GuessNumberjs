'use strict';

// document.querySelector('.guess').addEventListener('change', () => {
//   if (typeof this.value !== 'number') {
//     alert('Please type in a number');
//   }
// });

let secretNumber = Math.floor(Math.random() * 20) + 1;
const body = document.querySelector('body');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const myNumber = document.querySelector('.number');
const myGuess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
let myScore = Number(document.querySelector('.score').textContent);

let myHighScore = 0;

document.querySelector('.check').addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  let myString = ``;
  if (myScore <= 1) {
    myString = `You Lose`;
    body.style.backgroundColor = 'red';
  } else if (!guess) {
    myString = '🚫 Not a valid number!';
  } else if (guess === secretNumber) {
    myString = 'You Found My Number';
    myNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    if (myScore > myHighScore) {
      myHighScore = myScore;
      highScore.textContent = myHighScore;
    }
  } else if (guess > secretNumber) {
    myString = 'Too High';
    myScore -= 1;
    myGuess.value = '';
  } else {
    myString = 'Too Low';
    myScore -= 1;
    myGuess.value = '';
  }

  message.textContent = myString;
  score.textContent = myScore;
});

document.querySelector('.again').addEventListener('click', e => {
  body.style.backgroundColor = '#222';
  myScore = 20;
  score.textContent = myScore;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  myNumber.textContent = '?';
  myGuess.value = '';
  message.textContent = 'Start Guessing ...';
});
