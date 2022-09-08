/*Acceder al botón para abrir el modal */

let btnmodal = document.getElementById("abrirModal");

//Acceder ventana modal
let venmodal = document.getElementById("ventanaModal");

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

let btnmoda = document.getElementById("desplegarModal");

//Acceder ventana modal
let venmoda = document.getElementById("ventanModal");

//Acceder al botón Cerrar de la ventana modal
let cermoda = document.querySelector(".cerrarModal");

btnmoda.addEventListener("click", () => {
    venmoda.style.display = "block";
})

cermoda.addEventListener("click", () => {
    venmoda.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmoda.style.display = "none";
    }
})

// /*Acceder al botón para abrir el modal */

// let btnmodal = document.getElementById("abrirModal");

// //Acceder ventana modal
// let venmodal = document.getElementById("ventanaModal");

// //Acceder al botón Cerrar de la ventana modal
// let cermodal = document.querySelector(".cerrarModal");

// btnmodal.addEventListener("click", () => {
//     venmodal.style.display = "block";
// })

// cermodal.addEventListener("click", () => {
//     venmodal.style.display = "none";
// })

// window.addEventListener("click", (e) => {
//     if (e.target == venmodal) {
//         venmodal.style.display = "none";
//     }
// })

// /*Acceder al botón para abrir el modal */

// let btnmodal = document.getElementById("abrirModal");

// //Acceder ventana modal
// let venmodal = document.getElementById("ventanaModal");

// //Acceder al botón Cerrar de la ventana modal
// let cermodal = document.querySelector(".cerrarModal");

// btnmodal.addEventListener("click", () => {
//     venmodal.style.display = "block";
// })

// cermodal.addEventListener("click", () => {
//     venmodal.style.display = "none";
// })

// window.addEventListener("click", (e) => {
//     if (e.target == venmodal) {
//         venmodal.style.display = "none";
//     }
// })

// /*Acceder al botón para abrir el modal */

// let btnmodal = document.getElementById("abrirModal");

// //Acceder ventana modal
// let venmodal = document.getElementById("ventanaModal");

// //Acceder al botón Cerrar de la ventana modal
// let cermodal = document.querySelector(".cerrarModal");

// btnmodal.addEventListener("click", () => {
//     venmodal.style.display = "block";
// })

// cermodal.addEventListener("click", () => {
//     venmodal.style.display = "none";
// })

// window.addEventListener("click", (e) => {
//     if (e.target == venmodal) {
//         venmodal.style.display = "none";
//     }
// })