// escreva um programa que recebe duas notas de um aluno, calcula a media e imprime se o aluno foi aprovado ou reprovado(considerando que a média para aprovação é 7)

function verificaNota(num1, num2) {
    let notaFinal = (num1 + num2) / 2;

    notaFinal >= 7 ? console.log("aluno aprovado") : console.log("aluno reprovado")
}

verificaNota(7, 7)