// Escreva um programa que verifica a situação de um estudante de acordo com sua media final

function verificaMediaEstudante(media) {
    if(media >= 7) {
        console.log("aprovado");
    } else if (media >= 5 && media < 7) {
        console.log('recuperação');
    } else {
        console.log('reprovado');
    }
}

verificaMediaEstudante(10) 