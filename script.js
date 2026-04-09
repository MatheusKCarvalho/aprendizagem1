function trocarTema() {
    document.body.classList.toggle("escuro")
    }

function addTarefa() {
        let input = document.getElementById("novaTarefa");
        let lista = document.getElementById("lista");

        let texto =  input.value 
        

        lista.innerHTML += "<p onclick='feito(this)'>" + texto + "</p>"

        

        input.value = ""

}

function feito(element) {
    element.innerText = "✔" + element.innerText;

}

let numero = 0 
let pnumero =  document.getElementById("contador")

function mais() {

    numero ++ ;

    pnumero.innerText = numero

}

function menos() {
if (numero > 0) {
    numero -- ;
    }

    pnumero.innerText = numero

}

function reset() {
    numero = 0;
    pnumero.innerText = numero;
}

