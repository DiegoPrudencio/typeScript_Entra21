
var btnCalcularAreas = document.getElementById("idBtnCalcularAreas") as HTMLInputElement
var btnCalcularCirculo = document.getElementById("idBtCalcularCirculo") as HTMLInputElement
var btnCalcularRetangulo = document.getElementById("idBtCalcularRetangulo") as HTMLInputElement
var btnCalcularTrianguloRetangulo = document.getElementById("idBtCalcularTrianguloRetangulo") as HTMLInputElement
var btnCalcularTrianguloEquilatero = document.getElementById("idBtCalcularTrianguloEquilatero") as HTMLInputElement

btnCalcularAreas.onclick = function() {
    //let formas = document.getElementById("idFormas") as HTMLSelectElement
    let formas = (<HTMLSelectElement>document.getElementById('idFormas')).value;
    let sectionCirculo = document.getElementById("idSectionCirculo") as HTMLDivElement
    let sectionRetangulo = document.getElementById("idSectionRetangulo") as HTMLDivElement
    let sectionTrianguloRetangulo = document.getElementById("idSectionTrianguloRetangulo") as HTMLDivElement
    let sectionTrianguloEquilatero = document.getElementById("idSectionTrianguloEquilatero") as HTMLDivElement

    if (formas == "circulo") {
        sectionCirculo.hidden = false
        sectionRetangulo.hidden = true
        sectionTrianguloRetangulo.hidden = true
        sectionTrianguloEquilatero.hidden = true
    }
    if (formas == "retangulo") {
        sectionCirculo.hidden = true
        sectionRetangulo.hidden = false
        sectionTrianguloRetangulo.hidden = true
        sectionTrianguloEquilatero.hidden = true
    }
    if (formas == "trianguloRetangulo") {
        sectionCirculo.hidden = true
        sectionRetangulo.hidden = true
        sectionTrianguloRetangulo.hidden = false
        sectionTrianguloEquilatero.hidden = true
    }
    if (formas == "trianguloEquilatero") {
        sectionCirculo.hidden = true
        sectionRetangulo.hidden = true
        sectionTrianguloRetangulo.hidden = true
        sectionTrianguloEquilatero.hidden = false
    }
}

btnCalcularCirculo.onclick = function() {
    let circulo = document.getElementById("idCirculo") as HTMLInputElement
    let areaCirculo = document.getElementById("idAreaCirculo") as HTMLOutputElement
    let resultadoAreaCirculo: number

    // circulo.value = Number(circulo.value)
    resultadoAreaCirculo = 3.14 * (Number(circulo.value) ** 2)
    console.log(resultadoAreaCirculo);
    
    areaCirculo.value = "Área: " + resultadoAreaCirculo + " m²" 

    //resultadoAreaCirculo = areaCirculo.value 
}

btnCalcularRetangulo.onclick = function() {
    let retanguloLado1 = document.getElementById("idRetanguloLado1") as HTMLInputElement
    let retanguloLado2 = document.getElementById("idRetanguloLado2") as HTMLInputElement
    let areaRetangulo = document.getElementById("idAreaRetangulo") as HTMLOutputElement
    let resultadoAreaRetangulo

    resultadoAreaRetangulo = Number(retanguloLado1.value) * Number(retanguloLado2.value)

    
    areaRetangulo.value  = "Área: " + resultadoAreaRetangulo + " m²" 
}

btnCalcularTrianguloRetangulo.onclick = function() {
    let trianguloRetanguloAltura = document.getElementById("idTrianguloRetanguloAltura") as HTMLInputElement
    let trianguloRetanguloBase = document.getElementById("idTrianguloRetanguloBase") as HTMLInputElement
    let areaTrianguloRetangulo = document.getElementById("idAreaTrianguloRetangulo") as HTMLOutputElement
    let resultadoAreaTrianguloRetangulo

    resultadoAreaTrianguloRetangulo = (Number(trianguloRetanguloAltura.value) * Number(trianguloRetanguloBase.value)) / 2

    areaTrianguloRetangulo.value = "Área: " + resultadoAreaTrianguloRetangulo + " m²" 
}

btnCalcularTrianguloEquilatero.onclick = function() {
    let trianguloEquilatero = document.getElementById("idTrianguloEquilatero") as HTMLInputElement
    let areaTrianguloEquilatero = document.getElementById("idAreaTrianguloEquilatero") as HTMLOutputElement
    let resultadoAreaTrianguloEquilatero

    resultadoAreaTrianguloEquilatero = ((Number(trianguloEquilatero.value) ** 2) * 3 ** (1 / 2)) / 4

    areaTrianguloEquilatero.value = "Área: " + resultadoAreaTrianguloEquilatero.toFixed(2) + " m²" 
}
