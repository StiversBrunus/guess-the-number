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
*/


// Inserindo textos nos elementos html (titulo e paragrafo)
alterarTexto('h1', 'Jogo do Número Secreto');
alterarTexto('p', 'Insira um número de 1 à 10.');

// Gerar um número aleatório.
let numeroSecreto = gerarNumeroRandom();

// Configurar botão reiniciar
let botao = document.getElementById('btn-reiniciar');

// Precisamos pegar o evento do botão porque não pode dois onclick no mesmo form.
// Ele fica esperando, quando escutar o 'click', chama a função reiniciar.
botao.addEventListener('click', reiniciar);

// Aonde vai exibir a mensagem?

