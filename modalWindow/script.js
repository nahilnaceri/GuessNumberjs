'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const createModalBtn = document.querySelector('.create-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', key => {
  if (key.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } else {
    console.log('no modal is opened');
  }
});
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
/**
 * 
 * <div class="modal hidden">
      <button class="close-modal">&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
 */

// createModalBtn.addEventListener('click', () => {
//   const myModal = document.createElement('div');
//   myModal.classList.add('modal2', 'hidden');
//   const myBtn = document.createElement('button');
//   myBtn.innerHTML = `&times;`;
//   myBtn.classList.add('close-modal2');
//   myBtn.addEventListener('click', () => {
//     myModal.classList.add('hidden');
//   });
//   const header = document.createElement('h1');
//   header.textContent = 'My Second modal 😅';
//   const myPara = document.createElement('p');
//   const textNode = document.createTextNode(
//     'jkchbdchwbehcbwdchjbdwcjbwwchbcjhbhjbdwjhcbjhcbdjhbchjbchjbchjbcjhcbjhdwbcjhcchjbchjbcwjhbdjhdbjhdbhcbjhcbwdjhcbchjbdchjbdjbdwjhcbjhcwbjhwcbdhjbcjhwbcjhdbcbcbcbcdwhbchdbwjcbdwc'
//   );
//   myPara.appendChild(textNode);
//   myModal.appendChild(myBtn);
//   myModal.appendChild(header);
//   myModal.appendChild(myPara);
//   document.querySelector('body').appendChild(myModal);
//   myModal.classList.remove('hidden');
// });
