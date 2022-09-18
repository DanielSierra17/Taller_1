let formulario = document.getElementById("formulario")
let inputs = document.querySelectorAll("#formulario input")

let expresiones = {

    numeroDocumento: /^\d{10}$/, // 7 a 14 numeros.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    fechaNacimiento: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/, // Debe llevar el formato dia, mes, año.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Debe llevar el signo @ y .com.
    contrasena: /^.{4,12}$/ // 4 a 12 digitos.

}

let campos = {

    numeroDocumento: false,
    nombre: false,
    apellido: false,
    fechaNacimiento: false,
    correo: false,
    contrasena: false

}

let validarFormulario = (e) => {

    switch (e.target.name) {

        case "numeroDocumento":
            validarCampo(expresiones.numeroDocumento, e.target, 'numeroDocumento')
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido')
            break;
        case "fechaNacimiento":
            validarCampo(expresiones.fechaNacimiento, e.target, 'fechaNacimiento')
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
            break;
        case "contrasena":
            validarCampo(expresiones.contrasena, e.target, 'contrasena')
            validarContrasena2()
            break;
        case "contrasena2":
            validarContrasena2()
            break;

    }

}

let validarCampo = (expresion, input, campo) => {

    if (expresion.test(input.value)) {

        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true

    }

    else {

        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false

    }

}

let validarContrasena2 = () => {

    let inputContrasena1 = document.getElementById("contrasena")
    let inputContrasena2 = document.getElementById("contrasena2")

    if (inputContrasena1.value !== inputContrasena2.value) {

        document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos['contrasena'] = false

    }

    else {

        document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos['contrasena'] = true

    }

}

inputs.forEach((input) => {

    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)

})

formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    let terminos = document.getElementById("terminos")
    let tipoDocumento = document.getElementById("tipoDocumento")

    if (tipoDocumento.selected && campos.numeroDocumento && campos.nombre && campos.apellido && campos.contrasena && campos.correo && terminos.checked) {

        formulario.reset()

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() => {

            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')

        }, 5000)

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto')
        })

    }

    else {

        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')

    }

})