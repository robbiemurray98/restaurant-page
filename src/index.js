import "./styles.css";
import { homePage } from './content.js';
import { menuPage } from "./menu-page.js";
import { contactPage } from './contact.js'

homePage();

const content = document.querySelector('#content');

const homeButton = document.querySelector('#home-button');
homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    homePage();
})

const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    menuPage();
})

const contactButton = document.querySelector('#contact-button');
contactButton.addEventListener('click', () => {
    content.innerHTML = '';
    contactPage();
})