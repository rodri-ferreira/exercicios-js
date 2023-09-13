// escreva um programa que calculao imc  de uma pessoa e imprima uma mensagem indicando se a pessoa esta abaixo do peso normal  com sobre peso ou obesa

function verificaImc(peso, altura) {
    let imc = peso / (altura * altura);

    if(imc < 18.5) {
        console.log('abaixo do peso');
        return  
    }

    if(imc >= 18.5 && imc < 25) {
        console.log('peso normal');
        return
    }

    if(imc >= 25 && imc < 30) {
        console.log('acima do peso');
        return
    }

    if(imc >= 30) {
        console.log('acima do peso')
        return
    }
}

verificaImc(73, 1.70)