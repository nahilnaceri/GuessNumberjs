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
  if (myScore <= 1) {
    myString = `You Lose`;
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (!guess) {
    myString = '🚫 Not a valid number!';
  } else if (guess === secretNumber) {
    myString = 'You Found My Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > secretNumber) {
    myString = 'Too High';
    myScore -= 1;
    //document.querySelector('.guess').value = '';
  } else {
    myString = 'Too Low';
    myScore -= 1;
    //document.querySelector('.guess').value = '';
  }

  document.querySelector('.message').textContent = myString;
  document.querySelector('.score').textContent = myScore;
});
