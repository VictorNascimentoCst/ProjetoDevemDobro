/*
OBJETIVO 1: Quando o mouse passar por cima do personagem na lista
     - Colocar a classe selecionado no personagem do mouse (para add a animação nele);
     - Retirar a classe selecionado do personagem selecionado.

OBJETIVO 2: 
    -Mudar a imagem grande e o nome do personagem grande (jogador 1 ) selecionado para o personagem que o mouse esta em cima na lista;
 */

const personagens = document.querySelectorAll('.personagem')/*cria um array */
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if (idSelecionado === 'ultron') return;
        
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado');

       
        console.log(idSelecionado)/*vi seer o nome da imagem que vai ser trocada  */
        const imagemJogador1 = document.getElementById('personagem-jogador-1')
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        
        const nomeSelecionado = personagem.getAttribute('data-name')
        nomeJogador1.innerHTML = `${nomeSelecionado}`
    })


})

