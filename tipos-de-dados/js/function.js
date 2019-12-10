//Funções
function exibirNoConsole(){
    console.log($nomeCompleto);
}

function soma(){
    return $v1 + $v2;
}

function subtracao(){
    return $v1 - $v2;
}

function multiplicacao(){
    return $v1 * $v2;
}

function divisao(){
    return $v1 / $v2;
}

//variáveis
var $nomeCompleto = "Deivid Fernando da Silva e Silva";
var $v1 = 15
var $v2 = 5

//console
exibirNoConsole();

console.log(soma());
console.log(subtracao());
console.log(multiplicacao());
console.log(divisao());