/* Abre e Fecha o menu lateral no modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});


/* Fecha o menu quando clicar em algum item e muda o icone para lis */

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

/* Animar todos os itens da tela que tiverem o atributo data-anime */

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }
        else{
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
});

/* Ativar o carregamento do botão enviar do formulario */

const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

btnEnviar.addEventListener("click", () =>{
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = 'none';

});

/* tirar a mensagem depois de 5 segundos */

setTimeout(() =>{
    document.querySelector('#alerta').style.display = 'none';
}, 5000);
