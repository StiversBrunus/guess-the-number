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




