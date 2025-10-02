function soma() {
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
}

function sub() {

    var num3 = parseFloat(document.getElementById("n3").value)
    var num4 = parseFloat(document.getElementById("n4").value)
    document.getElementById("respSub").textContent = num3 - num4
}

function mult() {

    var number5 = parseFloat(document.getElementById("n5").value)
    var number6 = parseFloat(document.getElementById("n6").value)
    document.getElementById("respMult").textContent = number5 * number6
}

function div() {

    var numeral7 = parseFloat(document.getElementById("n7").value)
    var numeral8 = parseFloat(document.getElementById("n8").value)
    document.getElementById("respDiv").textContent = numeral7 / numeral8
}