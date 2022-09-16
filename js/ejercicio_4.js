let bt = document.getElementById("bo")

function instructores() {

    let ip = document.getElementById("sp").value
    ip = parseInt(ip)
    let is = document.getElementById("ss").value
    is = parseInt(is)
    let im = document.getElementById("sm").value
    im = parseInt(im)

    if (ip == 1 && is == 1 && im == 1) {

        alert(`La respuesta es correcta, tu nombre es Tatiana, tu apellido es Cabrera y la asignatura que impartes es JavaScript`)

    }

    else if (ip == 2 && is == 2 && im == 2) {

        alert(`La respuesta es correcta, tu nombre es Adriana, tu apellido es Duarte y la asignatura que impartes es Diseño`)

    }

    else if (ip == 3 && is == 3 && im == 3) {

        alert(`La respuesta es correcta, tu nombre es Carolina, tu apellido es Forero y la asignatura que impartes es Proyecto`)

    }

    else if (ip == 4 && is == 4 && im == 4) {

        alert(`La respuesta es correcta, tu nombre es Yaneth, tu apellido es Castañeda y la asignatura que impartes es Gestión Ambiental`)

    }

    else if (ip == 5 && is == 5 && im == 5) {

        alert(`La respuesta es correcta, tu nombre es Luis, tu apellido es Baqueros y la asignatura que impartes es Cultura Física`)

    }

    else if (ip == 6 && is == 6 && im == 6) {

        alert(`La respuesta es correcta, tu nombre es Christian, tu apellido es Buitrago y la asignatura que impartes es PHP`)

    }

    else if (ip == 7 && is == 7 && im == 7) {

        alert(`La respuesta es correcta, tu nombre es Fernando, tu apellido es Galindo y la asignatura que impartes es Bases de Datos`)

    }

    else {

        alert(`La respuesta es incorrecta, nombres o materia incorrecta por favor verifique sus datos e intentelo nuevamente`)

    }

}

bo.addEventListener('click', instructores)