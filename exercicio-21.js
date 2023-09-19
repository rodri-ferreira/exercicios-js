// Escreva um programa que determina a estação do ano com base no mês

const verificarEstacaoBaseMes = (mes) => {
    if(mes < 3 && mes === 12) {
        console.log("verão");
    } else if (mes < 6) {
        console.log("outono");
    } else if (mes < 9) {
        console.log('inverno');
    } else {
        console.log('primavera');
    }
}

verificarEstacaoBaseMes(9)