/*==================================================
MENÚ HAMBURGUESA
==================================================*/

const menuBtn = document.getElementById("encabezado__boton-menu");
const nav = document.getElementById("encabezado__navegacion");
const overlay = document.getElementById("menuOverlay");

if (menuBtn && nav && overlay) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("activo");
        nav.classList.toggle("activo");
        overlay.classList.toggle("activo");
        document.body.classList.toggle("menu-abierto");

    });

    document.querySelectorAll(".encabezado__lista a").forEach(link => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("activo");
            nav.classList.remove("activo");
            overlay.classList.remove("activo");
            document.body.classList.remove("menu-abierto");

        });

    });

    overlay.addEventListener("click", () => {

        menuBtn.classList.remove("activo");
        nav.classList.remove("activo");
        overlay.classList.remove("activo");
        document.body.classList.remove("menu-abierto");

    });

}


/*==================================================
HEADER AL HACER SCROLL
==================================================*/

const encabezado = document.querySelector(".encabezado");

if (encabezado) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            encabezado.classList.add("scrolled");

        } else {

            encabezado.classList.remove("scrolled");

        }

    });

}


/*==================================================
ENLACE ACTIVO
==================================================*/

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


/*==================================================
PARTICIPÁ
==================================================*/

const participaItem = document.getElementById("participaItem");
const participaIcono = document.getElementById("participaIcono");
const participaTitulo = document.getElementById("participaTitulo");

if (participaItem && participaIcono && participaTitulo) {

    const participaContenido = [

        {
            icono: "imagenes/user.png",
            titulo: "Militancia Activa"
        },

        {
            icono: "imagenes/formacion.png",
            titulo: "Formación Política"
        },

        {
            icono: "imagenes/solidario.png",
            titulo: "Solidaridad Justicialista"
        }

    ];

    let participaActual = 0;

    function cambiarParticipa() {

        participaItem.classList.add("oculto");

        setTimeout(() => {

            participaActual++;

            if (participaActual >= participaContenido.length) {

                participaActual = 0;

            }

            participaIcono.src =
                participaContenido[participaActual].icono;

            participaTitulo.textContent =
                participaContenido[participaActual].titulo;

            participaItem.classList.remove("oculto");

        }, 450);

    }

    setInterval(cambiarParticipa, 3500);

}


/*==================================================
FRASES
==================================================*/

const fraseItem = document.getElementById("fraseItem");
const fraseTexto = document.getElementById("fraseTexto");
const fraseAutor = document.getElementById("fraseAutor");

if (fraseItem && fraseTexto && fraseAutor) {

    const frases = [

        {
            texto: "Donde existe una necesidad, nace un derecho.",
            autor: "JUAN DOMINGO PERÓN"
        },

        {
            texto: "Mejor que decir es hacer.",
            autor: "JUAN DOMINGO PERÓN"
        },

        {
            texto: "Donde existe una necesidad, nace un derecho.",
            autor: "EVA PERÓN"
        }

    ];

    let fraseActual = 0;

    function cambiarFrase() {

        fraseItem.classList.add("oculto");

        setTimeout(() => {

            fraseActual++;

            if (fraseActual >= frases.length) {

                fraseActual = 0;

            }

            fraseTexto.textContent = frases[fraseActual].texto;
            fraseAutor.textContent = frases[fraseActual].autor;

            fraseItem.classList.remove("oculto");

        }, 450);

    }

    setInterval(cambiarFrase, 4000);

}