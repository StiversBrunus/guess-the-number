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
