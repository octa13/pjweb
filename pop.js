document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("popupPadron");

    const cerrar = document.getElementById("cerrarPopup");

    const cerrar2 = document.getElementById("cerrarPopup2");

    // Si esta página no tiene popup, no hacer nada

    if (!popup) return;

    // Mostrar automáticamente

    setTimeout(() => {

        popup.classList.add("activo");

    }, 500);

    // Botón X

    if (cerrar) {

        cerrar.addEventListener("click", () => {

            popup.classList.remove("activo");

        });

    }

    // Botón "Más tarde"

    if (cerrar2) {

        cerrar2.addEventListener("click", () => {

            popup.classList.remove("activo");

        });

    }

    // Cerrar haciendo clic fuera del cuadro

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.classList.remove("activo");

        }

    });

});