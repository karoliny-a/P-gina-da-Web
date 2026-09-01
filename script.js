const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('span');
        let valorAtual = parseInt(contador.textContent);
        contador.textContent = valorAtual + 1;
    });
});