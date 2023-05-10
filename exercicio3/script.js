// exercício 3
//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
// soma
const operacaoSoma = (numero1, numero2) => {
    const soma = numero1 + numero2
    return(`A soma do número ${numero1} mais o número ${numero2} é ${soma}.`)
}
console.log(operacaoSoma(5, 5))
console.log(operacaoSoma(20, 15))

//subtração
const operacaoSubtracao = (numero3, numero4) => {
    const subtracao = numero3 - numero4
    return(`A subtração do número ${numero3} menos o número ${numero4} é ${subtracao}.`)
}
console.log(operacaoSubtracao(5, 5))
console.log(operacaoSubtracao(20, 15))

//multiplicação
const operacaoMultiplicacao = (numero5, numero6) => {
    const multiplicacao = numero5 * numero6
    return(`A multiplicação do número ${numero5} pelo número ${numero6} é ${multiplicacao}.`)
}
console.log(operacaoMultiplicacao(5, 5))
console.log(operacaoMultiplicacao(20, 15))

//divisão
const operacaoDivisao = (numero7, numero8) => {
    const divisao = numero7 / numero8
    return(`A divisão do número ${numero7} pelo número ${numero8} é ${divisao}.`)
}
console.log(operacaoDivisao(5, 5))
console.log(operacaoDivisao(20, 15))
console.log(operacaoDivisao(20, 5))
console.log(operacaoDivisao(100, 10))


//b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
let numeroDigitado1 = Number(prompt(`Digite um número`))
let numeroDigitado2 = Number(prompt(`Digite outro número`))
console.log(numeroDigitado1, numeroDigitado2)

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
console.log(operacaoSoma(numeroDigitado1, numeroDigitado2), (`Números recebidos pelo usuário.`))
console.log(operacaoSubtracao(numeroDigitado1, numeroDigitado2), (`Números recebidos pelo usuário.`))
console.log(operacaoMultiplicacao(numeroDigitado1, numeroDigitado2), (`Números recebidos pelo usuário.`))
console.log(operacaoDivisao(numeroDigitado1, numeroDigitado2), (`Números recebidos pelo usuário.`))

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
// já fiz nos axercícios acima

