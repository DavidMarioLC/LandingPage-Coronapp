const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close');

function showMenu(){
    menu.classList.toggle('show-menu');
}

function hiddenMenu(){
    menu.classList.toggle('show-menu');
}

hamburgerMenu.addEventListener('click',showMenu);
closeButton.addEventListener('click',hiddenMenu);