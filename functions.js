function alterarTexto(tag, texto){

    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function gerarNumeroRandom (){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(campo){
    campo.value = '';
}

function exibirMensagemInicial (){

    alterarTexto('h1', 'Jogo do Número Secreto');
    alterarTexto('p', 'Insira um número de 1 à 10.');
}

function verificarChute(){

    let campo = document.querySelector('input')
    let valorDigitado = campo.value;

    // Ou eu faço uma recursão, ou eu faço um while.
    if (valorDigitado == numeroSecreto) {

        let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';
        // O innerHTML não reconhece variavel do tipo nmber
        //  com isto tive que colocar tudo dentro de uma variavel string
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;

        alterarTexto('h1', 'Você acertou!');
        alterarTexto('p', mensagem);
        // Habilitar o botao Reiniciar
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
    }else{
        
        if (valorDigitado > numeroSecreto) {
            alterarTexto('p', `Número secreto é menor.`);
        }else {
            alterarTexto('p', `Número secreto é maior.`);
        }        
        tentativas++;
    }
    
    limparCampo(campo);
    // Limpar o input;
}

function reiniciar(){

    exibirMensagemInicial();

    // Limpar valor do Input
    limparCampo(document.querySelector('input'));
    // Gerar novo número secreto
    numeroSecreto = gerarNumeroRandom();
    // Zerar números de tentativas:
    tentativas = 1;
    // Verificar chute
    verificarChute();

    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
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
