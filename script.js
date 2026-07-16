/* MENU */


const menuBtn = document.getElementById("encabezado__boton-menu");
const nav = document.getElementById("encabezado__navegacion");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("activo");

    nav.classList.toggle("activo");

    overlay.classList.toggle("activo");

    document.body.classList.toggle("menu-abierto");

});

/* cerrar tocando un enlace */

document.querySelectorAll(".encabezado__lista a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuBtn.classList.remove("activo");

        nav.classList.remove("activo");

        overlay.classList.remove("activo");

        document.body.classList.remove("menu-abierto");

    });

});

/* cerrar tocando el fondo */

overlay.addEventListener("click",()=>{

    menuBtn.classList.remove("activo");

    nav.classList.remove("activo");

    overlay.classList.remove("activo");

    document.body.classList.remove("menu-abierto");

});







/*ENCABEZADO*/

const encabezado = document.querySelector(".encabezado");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        encabezado.classList.add("scrolled");

    }else{

        encabezado.classList.remove("scrolled");

    }

});










/* ===========================
   ENLACE ACTIVO AUTOMÁTICO
=========================== */

const paginaActual = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "") || "index";

const enlaces = document.querySelectorAll(".encabezado__lista a");

enlaces.forEach(enlace => {

    if (enlace.dataset.page === paginaActual) {

        enlace.classList.add("activo");

    }

});





/*==================================
NOVEDADES - SLIDER MOBILE
==================================*/

const novedadesSlider = document.querySelector(".slider");
const novedadesTrack = document.querySelector(".slider__track");
const novedadesCards = document.querySelectorAll(".card");

const novedadesBarra = document.querySelector(".slider__progreso");
const novedadesActual = document.getElementById("slideActual");
const novedadesTotal = document.getElementById("slideTotal");

let novedadesIndex = 0;

novedadesTotal.textContent = novedadesCards.length;

function actualizarNovedades() {

    novedadesTrack.style.transform =
        `translateX(-${novedadesIndex * 100}%)`;

    novedadesActual.textContent = novedadesIndex + 1;

    novedadesBarra.style.width =
        `${((novedadesIndex + 1) / novedadesCards.length) * 100}%`;

}

/*==================================
SWIPE
==================================*/

let inicioX = 0;
let finX = 0;

novedadesSlider.addEventListener("touchstart", (e) => {

    inicioX = e.touches[0].clientX;

});

novedadesSlider.addEventListener("touchmove", (e) => {

    finX = e.touches[0].clientX;

});

novedadesSlider.addEventListener("touchend", () => {

    const distancia = inicioX - finX;

    if (Math.abs(distancia) < 50) return;

    if (distancia > 0) {

        if (novedadesIndex < novedadesCards.length - 1) {

            novedadesIndex++;

        }

    } else {

        if (novedadesIndex > 0) {

            novedadesIndex--;

        }

    }

    actualizarNovedades();

});

/*==================================
INICIALIZAR
==================================*/

actualizarNovedades();









/*==================================
PARTICIPÁ
==================================*/

const participaItem = document.getElementById("participaItem");
const participaIcono = document.getElementById("participaIcono");
const participaTitulo = document.getElementById("participaTitulo");

const participaContenido = [

    {

        icono:"imagenes/user.png",

        titulo:"Militancia Activa"

    },

    {

        icono:"imagenes/formacion.png",

        titulo:"Formación Política"

    },

    {

        icono:"imagenes/solidario.png",

        titulo:"Solidaridad Justicialista"

    }

];

let participaActual = 0;

function cambiarParticipa(){

    participaItem.classList.add("oculto");

    setTimeout(()=>{

        participaActual++;

        if(participaActual >= participaContenido.length){

            participaActual = 0;

        }

        participaIcono.src =
            participaContenido[participaActual].icono;

        participaTitulo.textContent =
            participaContenido[participaActual].titulo;

        participaItem.classList.remove("oculto");

    },450);

}

setInterval(cambiarParticipa,3500);


/*====================================
FRASES DESTACADAS
====================================*/

const fraseItem = document.getElementById("fraseItem");
const fraseTexto = document.getElementById("fraseTexto");
const fraseAutor = document.getElementById("fraseAutor");

const frases = [

    {

        texto:"Donde existe una necesidad, nace un derecho.",

        autor:"JUAN DOMINGO PERÓN"

    },

    {

        texto:"Mejor que decir es hacer.",

        autor:"JUAN DOMINGO PERÓN"

    },

    {

        texto:"Donde existe una necesidad, nace un derecho.",

        autor:"EVA DUARTE DE PERÓN"

    }

];

let fraseActual = 0;

function cambiarFrase(){

    fraseItem.classList.add("oculto");

    setTimeout(()=>{

        fraseActual++;

        if(fraseActual >= frases.length){

            fraseActual = 0;

        }

        fraseTexto.textContent =
            frases[fraseActual].texto;

        fraseAutor.textContent =
            frases[fraseActual].autor;

        fraseItem.classList.remove("oculto");

    },450);

}

setInterval(cambiarFrase,4000);