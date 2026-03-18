/* 
    =============
       ANOTAÇÃO
    =============

 Query Selector: Retorna o primeiro elemento html h1
 InnerHTML: Insere um texto no arquivo HTML, dentro da tag 'h1'
 
 Código refatorado -> funcao alterarTexto():

    let titulo = document.querySelector('h1');
    titulo.innerHTML = "Jogo do Número Secreto";
    
    let paragrafo = document.querySelector('p');
    paragrafo.innerHTML = "Insira um número de 1 à 10.";

    função anonima, e arrow function.
*/

// Inserindo textos nos elementos html (titulo e paragrafo)
exibirMensagemInicial();

// Gerar um número aleatório.
let numeroSecreto = gerarNumeroRandom();
let tentativas = 1;

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


