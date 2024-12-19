const navMenu = document.querySelector('.nav__list');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

// Show menu
hamburger.addEventListener('click', () => {
    navMenu.classList.add('open');
});

// Hide menu
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});

// Hide menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});