let p = document.getElementById("pl")
let b = document.getElementById("bl")

function longitud() {

    let pal = p.value
    let bot = p.value.length

    Swal.fire(`La longitud de la palabra ${pal} es ${bot}`)

}

b.addEventListener('click', longitud)

let pa = document.getElementById("pl")
let bo = document.getElementById("bm")

function mayuscula() {

    let bot = pa.value.toUpperCase()

    Swal.fire(`La palabra en mayusculas es ${bot}`)

}

bo.addEventListener('click', mayuscula)

let pal = document.getElementById("pl")
let bot = document.getElementById("bmn")

function minuscula() {

    let but = pal.value.toLowerCase()

    Swal.fire(`La palabra en minusculas es ${but}`)

}

bot.addEventListener('click', minuscula)

let pala = document.getElementById("pl")
let boto = document.getElementById("bpc")

function primerCaracter() {

    let palab = pala.value
    let buto = pala.value.charAt(0)

    Swal.fire(`La primer letra de la palabra ${palab} es ${buto}`)

}

boto.addEventListener('click', primerCaracter)