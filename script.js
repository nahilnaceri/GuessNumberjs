'use strict';

// document.querySelector('.guess').addEventListener('change', () => {
//   if (typeof this.value !== 'number') {
//     alert('Please type in a number');
//   }
// });

const secretNumber = Math.floor(Math.random() * 20) + 1;

let myScore = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  let myString = ``;
  if (!guess) {
    myString = '🚫 Not a valid number!';
  } else if (guess === secretNumber) {
    myString = 'You Found My Number';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    myString = 'Too High';
    myScore -= 1;
  } else {
    myString = 'Too Low';
    myScore -= 1;
  }

  document.querySelector('.message').textContent = myString;
  document.querySelector('.score').textContent = myScore;
});
