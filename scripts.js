const menuBurguer = document.querySelector('.menu-burguer');
const fecharMenu = document.querySelector('.fechar-mobile');
const menu = document.getElementById('menu');
const body = document.body;

// variável para guardar a posição de scroll
let scrollPos = 0;

function abrirMenuMobile() {
    // guarda a posição atual de scroll
    scrollPos = window.scrollY || window.pageYOffset;

    // trava o scroll
    body.style.position = 'fixed';
    body.style.top = `-${scrollPos}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';
    body.style.width = '100%';

    // abre o menu
    menu.classList.add('menu-mobile');
    fecharMenu.style.display = 'flex';

    if (window.innerWidth > 1023) {
        fecharMenu.style.display = 'none';
    }
}

function fecharMenuMobile() {
    // libera scroll
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.overflow = '';
    body.style.width = '';

    // retorna à posição original
    window.scrollTo(0, scrollPos);

    // fecha menu
    menu.classList.remove('menu-mobile');
    fecharMenu.style.display = 'none';
}

menuBurguer.addEventListener('click', abrirMenuMobile);
fecharMenu.addEventListener('click', fecharMenuMobile);

window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        fecharMenuMobile();
    }
});
