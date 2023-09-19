// escreva um programa que verifica se uma palavra é palindromo

function verificaPalindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida) {
        console.log("palindromo");
    } else {
        console.log("não é palindromo")
    }
}

verificaPalindromo("tonho")