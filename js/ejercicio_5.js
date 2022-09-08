/*Acceder al botón para abrir el modal */

let btnmodal = document.getElementById("am");

//Acceder ventana modal
let venmodal = document.getElementById("vmpc");

//Acceder al botón Cerrar de la ventana modal
let cermodal = document.querySelector(".cerrarModal");

btnmodal.addEventListener("click", () => {
    venmodal.style.display = "block";
})

cermodal.addEventListener("click", () => {
    venmodal.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none";
    }
})

/*Acceder al botón para abrir el modal */

let btnmoda = document.getElementById("dm");

//Acceder ventana modal
let venmoda = document.getElementById("vmac");

//Acceder al botón Cerrar de la ventana modal
let cermoda = document.querySelector(".cerrarModal");

btnmoda.addEventListener("click", () => {
    venmoda.style.display = "block";
})

cermoda.addEventListener("click", () => {
    venmoda.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmoda) {
        venmoda.style.display = "none";
    }
})

/*Acceder al botón para abrir el modal */

let btnmod = document.getElementById("em");

//Acceder ventana modal
let venmod = document.getElementById("vmpt");

//Acceder al botón Cerrar de la ventana modal
let cermod = document.querySelector(".cerrarModal");

btnmod.addEventListener("click", () => {
    venmod.style.display = "block";
})

cermodal.addEventListener("click", () => {
    venmod.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmod) {
        venmod.style.display = "none";
    }
})