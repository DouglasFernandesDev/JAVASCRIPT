import entradaDados from 'readline-sync';

console.log("Tabuada Interativa!!\n");

let dados = entradaDados.question("Informe a partir de quanto a tabuada: ");
let dados2 = entradaDados.question("informe ate quanto a tabuada: ");
let entradaNumeros = entradaDados.question("Digite os numeros separados por vírgula: ");
let numeroVez = entradaNumeros.split(",");

for(let multiplicador of numeroVez){
    console.log("Processando o número:", multiplicador);

    for(let contador = Number(dados); contador <= Number(dados2); contador++) {
    
    let resultado = Number(multiplicador) * contador
    
    console.log(multiplicador + " x " + contador + " = " + resultado);
     
}
}