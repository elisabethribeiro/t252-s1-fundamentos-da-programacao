// pra rodar usar npx ts-node nome-do-arquivo.ts
// let preco = 80;
// if (preco < 100) {
//     let desconto = "produto em promocao"
//     console.log(desconto);
// } else {
//     let desconto = "preco normal";
//     console.log (desconto);
// }
// console.log(desconto); -> codigo da undefinid

// funcao declarada: tem nome, pode ser chamada em qualquer lugar do código

//funcao anoniima nao tem nome proprio, fica armazenada em variaveis, so pode ser chamada DEPOIS da linha em que foi criada, util para funcoes locais
const subtrai = function (a: number, b: number): number {
    return a - b;
}

const soma = function (a: number, b: number): number {
    return a + b;
}

const multiplicar = function (a: number, b: number): number {
    return a * b;
}

// funcao calculadora que recebe um numero A e um B, o tipo de operacao, tem que retornar o numero calculado

function calculadora(a: number, b:number, operacao: string ): number {
if (operacao == "soma") 
    return soma(a, b);// ou return a + b
else if (operacao === "subtracao")
    return subtrai(a, b); //ou return a - b
else if (operacao ==="multiplicar")
return multiplicar(a, b);
else return NaN // NaN is not a number
}
console.log(calculadora(2, 3, "soma")) // ao chamar uma funcao QUE EXIGE PARAMETRO é necessário adicionar os parametros para ela