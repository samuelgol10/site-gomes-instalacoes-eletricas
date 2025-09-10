// seleciona o elemento com a classe .menu-burguer
const menuBurguer = document.querySelector('.menu-burguer');

// seleciona o elemento com a classe .fechar-mobile
const fecharMenu = document.querySelector('.fechar-mobile');

// seleciona o elemento com o id #menu
const menu = document.getElementById('menu');

// referência ao body do documento
const body = document.body;

// adiciona evento de clique no botão menu-burguer para abrir o menu
menuBurguer.addEventListener('click', abrirMenuMobile);

// adiciona evento de clique no botão fechar-menu para fechar o menu
fecharMenu.addEventListener('click', fecharMenuMobile);

// abre menu
function abrirMenuMobile() {
    // desativa rolagem do body
    body.style.overflow = 'hidden'
    // adiciona a classe 'menu-mobile' ao menu
    menu.classList.add('menu-mobile');
    // exibe o botão fechar-menu
    fecharMenu.style.display = 'flex';

    // se a tela for maior que 1023px, esconde o botão fechar
    if (window.innerWidth > 1023) {
        fecharMenu.style.display = 'none';
    }
}

// fecha menu
function fecharMenuMobile() {
    // ativa rolagem do body
    body.style.overflow = 'scroll'
    // remove a classe 'menu-mobile' do menu
    menu.classList.remove('menu-mobile');
    // esconde o botão fechar-menu
    fecharMenu.style.display = 'none';
}

// reset ao mudar o tamanho da tela
window.addEventListener('resize', () => {
    // se a tela for maior que 1023px
    if (window.innerWidth > 1023) {
        // ativa rolagem do body
        body.style.overflow = 'scroll'
        // remove a classe 'menu-mobile' do menu
        menu.classList.remove('menu-mobile');
        // esconde o botão fechar-menu
        fecharMenu.style.display = 'none';
    }
});
