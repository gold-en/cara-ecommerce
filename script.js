'use strict';
const hamburger = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

console.log(bar);

if (hamburger) {
  // if the hamburger is showing on the screen then... add an eventListener to it
  hamburger.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  // if the close(X) is showing on the screen then... add an eventListener to it
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
