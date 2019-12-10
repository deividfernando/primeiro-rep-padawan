console.log("Início programação síncrona.");

//função timer programação assíncrona
setTimeout(function(){
    for (let index = 0; index < 21; index++)
    console.log("Executando programação assíncrona " + index);

}, 3000);

console.log("termino programação síncrona.");