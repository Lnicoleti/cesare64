var letras = "abcdefghijklmnopqrstuvwxyz"; 
var texto = document.querySelector("#textconvert");
var code = document.getElementsByName("codificar");
var resultado = ""
var retorno = document.querySelector("#retorno");
var incremento = document.querySelector("#incremento")

function enviar() {
    var base = document.getElementById("baseid").selectedIndex;
    if (base == 0) {
        codebase64(texto, resultado)
    }
    else {
        codecesar(texto, resultado)
    }
}

function showincr() {
    var base = document.getElementById("baseid").selectedIndex;
    if (base == 1) {
        elem = document.querySelector("#incrbox")
        elem.style.display = "block"
    }
    else {
        elem = document.querySelector("#incrbox")
        elem.style.display = "none"
    }
}

function codebase64(texto, resultado) {
    if (code[0].checked) {
        teste = window.btoa(texto.value)
        resultado = resultado + teste
    }
    else {
        teste = window.atob(texto.value)
        resultado = resultado + teste
    }
    retorno.innerHTML = resultado
}

//"abcdefghijklmnopqrstuvwxyz";
function codecesar(texto, resultado) {
    if (code[0].checked) {
        for (i = 0; i < texto.value.length; i++) {
            if (texto.value[i] == " ") {
                resultado = resultado + " "
            }
            else {
                calcula = letras.indexOf(texto.value[i])
                if (calcula + parseInt(incremento.value) >= letras.length) {
                    dif = calcula + parseInt(incremento.value) - letras.length
                    resultado = resultado + letras[dif]
                }
                else {
                    resultado = resultado + letras[calcula + parseInt(incremento.value)]
                }
            }
        }
    }
    else {
        for (i = 0; i < texto.value.length; i++) {
            if (texto.value[i] == " ") {
                resultado = resultado + " "
            }
            else {
                calcula = letras.indexOf(texto.value[i])
                if (calcula - parseInt(incremento.value) < 0) {
                    dif = calcula - parseInt(incremento.value)
                    resultado = resultado + letras[letras.length + dif]
                }
                else {
                    resultado = resultado + letras[calcula - parseInt(incremento.value)]
                }
            }
        }
    }
    retorno.innerHTML = resultado
}