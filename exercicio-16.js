// Escreva um programa que determina  o maior entre três números

const verificaMaiorNumero = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3) {
        console.log(`o ${num1} é o maior número`)
        return
    } 

    if(num2 >= num1 && num2 >= num3) {
        console.log(`o ${num2} é o maior número`)
        return
    }

    if(num3 >= num1 && num3 >= num2) {
        console.log(`o ${num3} é o maior número`)
        return
    }
}

verificaMaiorNumero(8, 7, 7)