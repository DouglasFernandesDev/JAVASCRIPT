import entradaDados from 'readline-sync'

console.log(Math.random());

const aleatorio = Math.random();
const numeroSecreto = Math.floor((aleatorio * 100) + 1);


let acertou = false
let tentativas = 0;

while (!acertou && tentativas < 10){
    let palpite = Number(entradaDados.question("adivinhe o numero: "));
    tentativas += 1;
    if (palpite > numeroSecreto) {
        console.log("Muito alto!");
    }
    else if(palpite < numeroSecreto){
        console.log("Muito baixo!");
    }
    else {
        console.log("Você acertou!");
        acertou = true;
    }
}
if (acertou) {
    console.log("\nParabéns você venceu!")
    console.log("\nnumero de tentativa: "+tentativas)
    console.log("Resultado final: "+numeroSecreto)
}
else{
   console.log("\nNúmero de tentativas esgotadas!")
   console.log("\nnumero de tentativa: "+tentativas)
   console.log("Resultado final: "+numeroSecreto)
}

