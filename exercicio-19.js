// escreva um programa que verifica se um numero esta dentro de um determinado intervalo 

const verificarNumeroIntervalo = (numIntervalo, numInicial, numFinal) => {
    if(numIntervalo >= numInicial && numIntervalo <= numFinal || numIntervalo <= numInicial && numIntervalo >= numFinal) {
        console.log(`${numIntervalo} está entre os números ${numInicial} e ${numFinal}`)
    } else {
        console.log('está fora do intervalo');
    }
}

verificarNumeroIntervalo(8, 10, 7)