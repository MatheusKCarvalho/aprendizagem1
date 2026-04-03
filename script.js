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
