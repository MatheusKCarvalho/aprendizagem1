function trocarTema() {
    document.body.classList.toggle("escuro")
    }

function addTarefa() {
        let input = document.getElementById("novaTarefa");
        let lista = document.getElementById("lista");

        let texto = input.value

        lista.innerText = texto

}
