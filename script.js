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

const btnTemaEscuro = document.querySelectorAll('.btn-tema-escuro');

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}

