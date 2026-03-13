function alterarTexto(tag, texto){

    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function gerarNumeroRandom (){
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){

    let valorDigitado = document.querySelector('input').value;

    // Ou eu faço uma recursão, ou eu faço um while.
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


/* Exercicios de Função*/

// Função anônima:
let helloWorld = function () {
    console.log('Olá Mundo!');
};
// Função Arrow:
const saudacao = (nome) => {
    return console.log(`Olá, ${nome}!`);
}
// Arrow function curta:
const saudacaoTwo = (nome) => console.log(`Olá, ${nome}!`);

/* =======================================================*/
// Funções de multiplicar dos quatro tipos de função 
function multiplicar (numero, fator){
    return numero * fator;
}
// Função anônima:
let multiAnon = function (numero, fator) {  
    return numero * fator;
};
// Função Arrow:
const multiArrow = (numero, fator) => {
    return numero * fator;
};
// Função Arrow curta:
const multiArrowShort = (numero, fator) => numero * fator;
/* =======================================================*/
// Funções com os quatro tipos de função 
function maiorNumero (a, b){
    return a > b ? a:b;
}  
// Função anônima:
const getMaxAnon = function (a, b) {
    return a > b ? a:b;
}
// Arrow function com ternário
const getMaxArrow = (a, b) => {
    return a > b ? a:b;
}
// Arrow function curta com ternário
const getMaxShort = (a, b) => a > b ? a:b;

function media (notas){

    let divisor = notas.length;
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / divisor;
}

const multPorEleMesmo = (numero) => numero * numero;
