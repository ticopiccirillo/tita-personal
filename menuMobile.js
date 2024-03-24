const menuMob = document.getElementById('menu-mobile');
const animarBtn = document.getElementById('btn-mobile');

menuMob.addEventListener('click', animar);

function animar(){
    menuMob.classList.toggle('open');
    animarBtn.classList.toggle('ativo');
};