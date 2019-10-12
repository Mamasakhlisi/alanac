let toggle = document.getElementById('toggle');
let navLinks = document.querySelector('.nav__links');
let main = document.querySelector('main');
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    main.classList.toggle('mainTop');
});