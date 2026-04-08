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
let paragrafonumero =  document.getElementById("contador")

function mais() {

    numero ++ ;

    paragrafonumero.innerText = numero

}

function menos() {

    numero -- ;

    paragrafonumero.innerText = numero

}
