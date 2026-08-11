import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("\nEscolha uma das alternativas:")
console.log("1- Listar os salários de 2010 à 2020")
console.log("2- listar o índice IPCA de 2010 à 2020")
console.log("3- Comparação entre o percentual de aumento salarial e IPCA")

let escolha = entradaDados.question("\nDigite o numero da sua escolha: ")
 

if(Number(escolha) == 1){
    salarioMinimo.forEach(function(salario, i){
    console.log("Ano:".padEnd(30, '.')+salario.ano)
    console.log("Salário mínimo:".padEnd(30, '.')+salario.salario+".00\n")
    });
}
else if (Number(escolha) == 2) {
    inflacao.forEach(function(inflacao, i){
    console.log("Ano:".padEnd(30, '.')+inflacao.ano)
    console.log(`${"Inflação IPCA:".padEnd(30, '.') + inflacao.ipca}%\n`)
    });
}
else if(Number(escolha) == 3){
    salarioMinimo.forEach(function(salario, i){
        if(i > 0){
            let anterior = salarioMinimo [i - 1]
            let diferenca = salario.salario - anterior.salario
            let percentualCrescimento = (diferenca / anterior.salario) * 100
            let inflacaoAtual = inflacao[i]

            console.log("Ano:".padEnd(30, '.')+salario.ano);
            console.log("Salário mínimo:".padEnd(30, '.')+salario.salario+".00");
            console.log("Crescimento Salarial:".padEnd(30, '.')+percentualCrescimento.toFixed(2)+"%")
            console.log(`${"Inflação IPCA:".padEnd(30, '.') + inflacaoAtual.ipca}%`)

            if(percentualCrescimento > inflacaoAtual.ipca){
                console.log("\nO salario mínimo ganhou a inflação nesse ano!\n")
            }
            else if(inflacaoAtual.ipca > percentualCrescimento){
                console.log("\nA inflação ganhou o salário mínimo nesse ano!\n")
            }
            else{
                console.log("\nHouve empate entre o salário mínimo e a inflação nesse ano!\n")
            }

        }
    });
}
else {
    console.log("Opção inválida!")
} 