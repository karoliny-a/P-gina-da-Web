document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('button');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const contador = botao.querySelector('span');
            if (contador) {
                let valorAtual = parseInt(contador.textContent) || 0;
                contador.textContent = valorAtual + 1;
            }
        });
    });
});