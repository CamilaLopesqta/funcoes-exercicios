// exercício 1
//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function imprimirNome (nome){
    console.log(`Olá,`, nome)
}
imprimirNome("Camila")
imprimirNome("Elza")

// Arrow function
const imprimirNomeArrow = nome => {
    console.log(`Olá,`, nome)
}
imprimirNomeArrow(`Camila`)
imprimirNomeArrow("Elza")

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
function tabuada (numero){
    console.log(`Tabuada do número:`, numero,":", numero*0, numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10)
}

tabuada(2)
tabuada(5)
tabuada(7)
tabuada(9)

// Arrow function
const tabuadaArrow = numero => {
    console.log(`Tabuada do número (Arrow):`, numero,":", numero*0, numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10)
}

tabuadaArrow(3)
tabuadaArrow(4)
tabuadaArrow(6)

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
