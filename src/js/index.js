
/*
Objetivo 1 - Quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

    Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele.
    Passo 2 - Identificar o clique no botão
    Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - Esconder o botão de mostra mais
    Passo 1 - Pegar o botão e esconder ele    
*/

//Objetivo 1 - Quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

//Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele.

//console.log(document.querySelector('.btn-mostrar-projetos'));       Mostrar no console

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//console.log(projetosInativos);   Mostrar a lista dos projetos inativos no console

//console.log(botaoMostrarProjeto);

botaoMostrarProjetos.addEventListener('click' , () => {
    //Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
    //console.log(projetoInativo);  lop dos 4 projetos inativos
    //console.log(projetoInativo.classList);
    MostrarMaisProjetos();

    //Objetivo 2 - Esconder o botão de mostra mais
    //Passo 1 - Pegar o botão e esconder ele
    EsconderBotao();
}); 

function EsconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
