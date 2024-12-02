document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
  const swiper = new Swiper(".swiper", {
    // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
    direction: "horizontal",
    // Define a direção de transição dos slides como horizontal.
    loop: false,
    // Define que o carrossel não irá repetir os slides (não fará looping).

    pagination: {
      el: ".swiper-pagination",
      // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
    },
  });

  document.addEventListener("keydown", function (event) {
    // Adiciona um listener para eventos de teclado.
    if (event.key === "ArrowLeft") {
      swiper.slidePrev();
      // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
    } else if (event.key === "ArrowRight") {
      swiper.slideNext();
      // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
    }
  });

  const gameInput = document.getElementById("gameInput");
  // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

  gameInput.addEventListener("keypress", function (event) {
    // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
    if (event.key === "Enter") {
      // Verifica se a tecla pressionada foi 'Enter'.
      let searchGame = gameInput.value.trim().toUpperCase();
      // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

      switch (searchGame) {
        case "MARIO":
          swiper.slideTo(0);
          // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
          break;
        case "POKEMON":
          swiper.slideTo(1);
          // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
          break;
        case "ZELDA":
          swiper.slideTo(2);
          // Se o valor digitado for 'Zelda', move para o segundo slide (índice 2).
          break;
        default:
          alert("Jogo não foi encontrado");
          // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
          break;
      }
    }
  });
  // Adicionar evento de clique para abrir o modal
  document.querySelectorAll(".banner").forEach((banner) => {
    banner.addEventListener("click", function (event) {
      if (event.target.classList.contains("learn-more")) {
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const modalTrailer = document.getElementById("modal-trailer");

        const gameTitle = banner.querySelector("h1").innerText;
        const gameDescription = banner.querySelector(".description").innerText;
        const gameTrailer = banner.querySelector("iframe").src;

        modalTitle.innerText = gameTitle;
        modalDescription.innerText = gameDescription;
        modalTrailer.src = gameTrailer;

        modal.style.display = "block";
      }
    });
  });

  // Adicionar evento de clique para fechar o modal
  document
    .querySelector(".close-button")
    .addEventListener("click", function () {
      document.getElementById("modal").style.display = "none";
    });

  // Fechar o modal quando clicar fora dele
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
