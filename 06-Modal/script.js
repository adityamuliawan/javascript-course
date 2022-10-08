'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Select all

const openModal = () => {
  modal.classList.remove('hidden'); // No "."
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal /* No need () */);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
