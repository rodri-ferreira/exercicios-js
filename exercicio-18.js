// Escreva um programa que verifica se uma pessoa pode dirigir com base na idade 
const verificaIdadeDirigir = (idade) => {
    if(idade >= 18) {
        console.log('pode dirigir');
    } else {
        console.log('não pode dirigir');
    }
}

verificaIdadeDirigir(18)