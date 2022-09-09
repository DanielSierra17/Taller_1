let btnmodal = document.getElementById("am")

let venmodal = document.getElementById("vmpc")

let cermodal = document.querySelector(".cerrarModal")

btnmodal.addEventListener("click", () => {
    venmodal.style.display = "block"
})

cermodal.addEventListener("click", () => {
    venmodal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none"
    }
})


let btnmoda = document.getElementById("dm")

let venmoda = document.getElementById("vmac")

let cermoda = document.querySelector(".cerrarModal1")

btnmoda.addEventListener("click", () => {
    venmoda.style.display = "block"
})

cermoda.addEventListener("click", () => {
    venmoda.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmoda) {
        venmoda.style.display = "none"
    }
})


let btnmod = document.getElementById("em")

let venmod = document.getElementById("vmpt")

let cermod = document.querySelector(".cerrarModal2")

btnmod.addEventListener("click", () => {
    venmod.style.display = "block"
})

cermod.addEventListener("click", () => {
    venmod.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmod) {
        venmod.style.display = "none"
    }
})


let btnmo = document.getElementById("mm")

let venmo = document.getElementById("vmat")

let cermo = document.querySelector(".cerrarModal3")

btnmo.addEventListener("click", () => {
    venmo.style.display = "block";
})

cermo.addEventListener("click", () => {
    venmo.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmo) {
        venmo.style.display = "none"
    }
})


let btnm = document.getElementById("im")

let venm = document.getElementById("vmpr")

let cerm = document.querySelector(".cerrarModal4")

btnm.addEventListener("click", () => {
    venm.style.display = "block";
})

cerm.addEventListener("click", () => {
    venm.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venm) {
        venm.style.display = "none"
    }
})


let btn = document.getElementById("arm")

let ven = document.getElementById("vmar")

let cer = document.querySelector(".cerrarModal5")

btn.addEventListener("click", () => {
    ven.style.display = "block"
})

cer.addEventListener("click", () => {
    ven.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == ven) {
        ven.style.display = "none"
    }
})


let bt = document.getElementById("ejm")

let ve = document.getElementById("vmpcc")

let ce = document.querySelector(".cerrarModal6")

bt.addEventListener("click", () => {
    ve.style.display = "block"
})

ce.addEventListener("click", () => {
    ve.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == ve) {
        ve.style.display = "none"
    }
})


let b = document.getElementById("inm")

let v = document.getElementById("vmacc")

let c = document.querySelector(".cerrarModal7")

b.addEventListener("click", () => {
    v.style.display = "block"
})

c.addEventListener("click", () => {
    v.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == v) {
        v.style.display = "none"
    }
})