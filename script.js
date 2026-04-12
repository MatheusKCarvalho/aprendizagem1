function trocarTema() {
    document.body.classList.toggle("escuro")
    }

function addTarefa() {
        let input = document.getElementById("novaTarefa");
        let lista = document.getElementById("lista");

        let texto =  input.value 
        

        lista.innerHTML += "<p onclick='feito(this)' >" + texto + "</p>"

    

        input.value = ""

}

function feito(element) {
    if (element.innerText.startsWith ("✔")) {
        element.remove();
        } else {
            element.innerText = "✔ " + element.innerText;
        }

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

let  fraserandom = document.getElementById("pfrases")

let frases = ["Nunca desacredite dos seus sonhos","Não desista","Continue tentando","Você consegue,você é capaz"];


function aleatorio(){
    let numerofrase = Math.floor(Math.random() * frases.length )
    let escolher = frases[numerofrase];
    fraserandom.innerText = escolher
}


let visivel = true; 

function funcaoesconder() {

    let msgesconder = document.getElementById("msgesconder");
    let botaoesconder = document.getElementById("btnesconder");

    if (visivel) {
        msgesconder.style.display = "none";
        botaoesconder.innerText = "Mostrar";

        visivel = false
    } else {
        msgesconder.style.display = "block";
        botaoesconder.innerText = "Esconder";
        visivel = true
    }


}
