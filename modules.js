import caesar13 from './caesar.js';

const text = document.querySelector('.text');
const button = document.querySelector('.button');


button.addEventListener('click', () => caesar13(text.value));
