import createHome from './modules/home.js';
import createMenu from './modules/menu.js';
import createAbout from './modules/about.js';

console.log('you are developing!');

window.addEventListener('load', createHome);

const homeBtn = document.querySelector('nav > button:first-of-type');
const menuBtn = document.querySelector('nav > button:nth-of-type(2)');
const aboutBtn = document.querySelector('nav > button:last-of-type');

homeBtn.addEventListener('click', createHome);
menuBtn.addEventListener('click', createMenu);
aboutBtn.addEventListener('click', createAbout);