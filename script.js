function trocarTema() {
    console.log("clicou");
    let botao = document.getElementById("trocarTema")
    document.body.classList.toggle("escuro")
    

    if (document.body.classList.contains("escuro")){
        botao.innerText = "Tema Claro"
    } else {
        botao.innerText = "Tema Escuro"
    }

}

function addTarefa() {
        let input = document.getElementById("novaTarefa");
        let lista = document.getElementById("lista");

        let texto =  input.value 

        let itens = lista.children //pega todas as tarefas que ja existe

        for (let i = 0; i < itens.length; i++)  { // looping (for) fica verifndo uma por uma até acabar (assim que acabar a lista o i vai ser igual e nao menor que o numero da lista, ai ele para, ai sai do looping) quando acabar, ja vai ter verificado tudo
            if (itens[i].innerText === texto) { //se a tarefa atual (o [i] é tipo pra mostrar qual tarefa é cada (ex:essa é a tarefa1, essa é a 2 e etc) (pelo que entendi)) for igual ao texto 
            alert("essa tarefa ja existe!")// alerta, elas sao iguais
            return;// ai para de rodar o comando (para nao adicionar tarefas repetidas)
        }
        }


        


        if (texto.trim() === "") {
            alert("Digite algo")
            return;
        }
        
        
        lista.innerHTML += "<p onclick='feito(this)' >" + texto + "</p>"

    

        input.value = ""

        atualizarcontador();

}



function feito(element) {
    if (element.innerText.startsWith ("✔")) {
        element.remove() 
        } 
        else {
            element.innerText = "✔ " + element.innerText;
        }
        element.classList.toggle("concluido")

    atualizarcontador(); 
        

}

function atualizarcontador(){
    let contadortarefas = document.getElementById("contadortarefas")
    let lista = document.getElementById("lista")
    let listacontagem = lista.children.length
    
    if (listacontagem === 0){
    contadortarefas.innerText = "Sem tarefas no momento 😴"
    } else {
    contadortarefas.innerText = "Quantidades de Tarefas: " + listacontagem
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
