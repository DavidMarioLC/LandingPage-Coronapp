const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const listLink = document.querySelectorAll(".menu__list a");


function showMenu(){
    menu.classList.toggle('show-menu');
}

function hiddenMenu(){
    menu.classList.toggle('show-menu');
}

function gotosection(){
    menu.classList.toggle('show-menu');
} 

hamburgerMenu.addEventListener('click',showMenu);
closeButton.addEventListener('click',hiddenMenu);
listLink.forEach(function(link){
    link.addEventListener("click",gotosection)
})