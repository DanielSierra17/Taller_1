let bo = document.getElementById("bt")

function triangulos() {

    let pl = document.getElementById("np").value
    pl = parseInt(pl)
    let sl = document.getElementById("ns").value
    sl = parseInt(sl)
    let tl = document.getElementById("nt").value
    tl = parseInt(tl)

    if (pl == sl && sl == tl) {

        alert(`Los lados digitados corresponden a un triángulo equilatero`)

    }

    else if (pl == sl || pl == tl || sl == tl) {

        alert(`Los lados digitados corresponden a un triángulo isosceles`)

    }

    else {

        alert(`Los lados digitados corresponden a un triángulo escaleno`)

    }

}

bo.addEventListener('click', triangulos)