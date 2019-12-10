//declaração de variáveis.
var nome = "Professor Madson";
var sobreNome = "Aguiar Rodrigues";

console.log("Instrução solta em um arquivo JS.");

//declaração de função
function exibirNomeConsole(){
    console.log("exibir nome: " + nome + " " + sobreNome);
}

function exibirNomeCompleto(){
    console.log("Professor, nome completo: " + nome + " " + sobreNome);
}

function eventoClick(){
    alert("Você clicou em um botão.")
}


//chamadas de função

exibirNomeConsole();