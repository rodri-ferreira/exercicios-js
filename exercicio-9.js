// escreva um prigrama que recebe um numero e verifica se ele é positivo, negativo ou zero

function verificarNumero(num) {
    if(num > 0) {
        console.log(num, "é positivo" )
    } else if (num === 0){
        console.log(num, "é zero")
    } else {
        console.log(num, "é negativo")
    }
}

verificarNumero(-41)

