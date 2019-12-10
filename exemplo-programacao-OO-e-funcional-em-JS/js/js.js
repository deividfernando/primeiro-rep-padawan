//funcional
function sejaBemVindo(){
    console.log("Seja bem-vindo à Formação JavaScript Mestre Jedi!");
}

console.log("Chamando a função seja bem vindo sejaBemVindo():");    
sejaBemVindo();

//POO
var objProfessor = {
    nome: "Prof. Madson Aguiar",
    curso: "Formação JavaScript Mestre Jedi!",
    ministrarAula: function(){
        console.log("Ministrando aula de JavaScript");
    }
};
console.log("Objeto Professor");
console.log(objProfessor);


console.log("Acessando propriedades do objeto:");
console.log(objProfessor.nome);
console.log(objProfessor.curso);

console.log("Chamando o método do objeto professor: objprofessor.ministrarAula()");
objProfessor.ministrarAula();
