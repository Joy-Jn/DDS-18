document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.nav-mobile');
    const menuHamburguer = document.querySelector('.menu-hamburguer');

    menuHamburguer.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

