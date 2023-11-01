const imagenes = document.querySelectorAll(".imagen");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
let indiceActual = 0;

function mostrarImagen(indice) {
    // Oculta todas las imágenes
    imagenes.forEach((imagen) => {
        imagen.classList.remove("visible");
    });

    // Muestra la imagen actual
    imagenes[indice].classList.add("visible");
}

function mostrarImagenSiguiente() {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
    } else {
        indiceActual = 0;
    }
    mostrarImagen(indiceActual);
}

function mostrarImagenAnterior() {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen(indiceActual);
}

// Eventos de clic para los botones
botonSiguiente.addEventListener("click", mostrarImagenSiguiente);
botonAnterior.addEventListener("click", mostrarImagenAnterior);

// Mostrar la primera imagen al cargar la página
mostrarImagen(indiceActual);







/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }