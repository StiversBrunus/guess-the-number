function alterarTexto(tag, texto){

    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

// Verificar se o número gerado, já foi gerado anteriormente
let listaDeNumerosJaSorteados = [];
let numeroLimite = 10;
function gerarNumeroRandom (){

    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoLista = listaDeNumerosJaSorteados.length;

    if (tamanhoLista == numeroLimite) {
        listaDeNumerosJaSorteados = [];
    }

    if (listaDeNumerosJaSorteados.includes(numeroGerado)) {
        // recursão
        return gerarNumeroRandom();
    } else {

        listaDeNumerosJaSorteados.push(numeroGerado);
        return numeroGerado;
    }

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

/*
Aprendemos:

    1. Funções
    2. Listas (Arrays)
    3. Recursão

*/