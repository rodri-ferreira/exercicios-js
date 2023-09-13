// escreva um programa que verifica se a pessoa pode votar com base na idade

function verificaSePodeVotar(idade) {
    if(idade < 16) {
        console.log('você não pode votar')
        return
    }
    if(idade >= 16 && idade < 18 || idade > 70) {
        console.log('você pode votar, porém não é obrigado');
        return
    }
    if(idade >= 18 && idade <= 70) {
        console.log('você é obrigado a votar');
        return
    }
}

verificaSePodeVotar(58)