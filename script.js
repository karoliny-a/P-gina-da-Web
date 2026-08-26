/ Seleciona todos os botões da página
  const botoes = document.querySelectorAll("button");

  botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        
        // Converte o texto atual para número, soma +1 e atualiza o elemento
        let valorAtual = parseInt(texto.textContent);
        texto.textContent = valorAtual + 1;
    });
  });