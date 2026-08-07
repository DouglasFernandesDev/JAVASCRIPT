import entradaDados from 'readline-sync';

const senha = entradaDados.question("Digite sua senha: ");


const temTamanho = senha.length >= 8
let temMaiuscula = false;
let temNumero = false;
let temEspecial = false;

for(const caractere of senha){
  
   if(caractere === caractere.toUpperCase() && caractere.toLowerCase() !== caractere.toUpperCase()) {
    temMaiuscula = true;
   }
   if("0123456789".includes(caractere)) {
    temNumero = true;
   }
   if("!@#$%&*".includes(caractere)) {
    temEspecial = true;
   }
}
if(temTamanho == true){
    console.log("\nTem " +senha.length+ " caracteres.")
}
else {
    console.log("\nCaractere insuficiente.")
}
if(temMaiuscula) {
     console.log("Tem maiúscula.");
}
else {
    console.log("Falta maiúscula.");
}
if(temNumero == true) {
    console.log("Tem número.")
}
else{
    console.log("Falta número.")
}
if(temEspecial == true) {
    console.log("Tem caractere especial.")
}
else {
    console.log("Falta caractere especial. ")
}
    let nota = temTamanho + temMaiuscula + temEspecial + temNumero
if (nota <=1){
    console.log("Senha: Fraca")
}
else if (nota == 2) {
    console.log("Senha: Média")
}
else if (nota == 3) {
    console.log("Senha: Forte")
}
else if (nota == 4) {
    console.log("Senha: Excelente")
}