const menuBtn = document.querySelector('.menu-toggler');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('header');
const form = document.querySelector('form');
const email = document.querySelector('#email');
errorMsg = document.querySelector('.error-message');

function toggleNav(e) {
    menuBtn.classList.toggle('change');
    if(menuBtn.classList.contains('change')) {
        menuBtn.src = 'images/icon-close.svg';
    } else {
        menuBtn.src = 'images/icon-hamburger.svg';
    }
    nav.classList.toggle('show');
    header.classList.toggle('show');
    // console.log(e.target);
}

let isValid = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();

    // errorMsg = errorMsg.classList.toggle('show');
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    email.value = '';
}



menuBtn.addEventListener('click', toggleNav);

form.addEventListener('submit', processFormData);