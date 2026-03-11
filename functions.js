function alterarTexto(tag, texto){

    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function gerarNumeroRandom (){
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){

    let valorDigitado = document.querySelector('input').value;

    if (valorDigitado == numeroSecreto) {
        alert(`Você acertou, o número secreto é: ${numeroSecreto}!`);
        // Limpar o input;
        // Habilitar o botao Reiniciar
    }else{

        if (valorDigitado > numeroSecreto) {
            alert(`Número secreto é menor que: ${valorDigitado}`);
        }else if (valorDigitado < numeroSecreto) {
            alert(`Número secreto é maior que: ${valorDigitado}`);
        }
        
        // Limpar o input;
    }

}

function reiniciar(){

    // Limpar valor do Input
    // Gerar novo número secreto
    // Verificar chute
    numeroSecreto = gerarNumeroRandom();
    verificarChute();
}