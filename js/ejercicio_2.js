let bu = document.getElementById("bt")

function temperaturas() {

    let so = document.getElementById("sp").value
    let st = document.getElementById("ss").value
    let ng = document.getElementById("nt").value
    ng = parseInt(ng)

    if (so == 1 && st == 2) {

        let formula = ((ng - 32) / 1.8)

        Swal.fire(`La conversión de grados Fahrenheit a Celcius es ${formula}`)

    }

    else if (so == 1 && st == 3) {

        let formula = ((ng - 32) * 5 / 9) + 273.15

        Swal.fire(`La conversión de grados Fahrenheit a Kelvin es ${formula}`)

    }

    else if (so == 2 && st == 1) {

        let formula = ((ng) * 9 / 5) + 32

        Swal.fire(`La conversión de grados Celcius a Fahrenheit es ${formula}`)

    }

    else if (so == 2 && st == 3) {

        let formula = ((ng) + 273.15)

        Swal.fire(`La conversión de grados Celcius a Kelvin es ${formula}`)

    }

    else if (so == 3 && st == 1) {

        let formula = ((ng) - 273.15) * 9 / 5 + 32

        Swal.fire(`La conversión de grados Kelvin a Fahrenheit es ${formula}`)

    }

    else if (so == 3 && st == 2) {

        let formula = ((ng) - 273.15)

        Swal.fire(`La conversión de grados Kelvin a Celcius es ${formula}`)

    }

}

bu.addEventListener('click', temperaturas)