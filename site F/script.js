    // Função para mover as imagens do carrossel
    function moveSlide(direction, carouselId) {
      const carousel = document.getElementById(carouselId);
      const items = carousel.querySelectorAll('.carousel-item');
      let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      
      // Remove a classe 'active' do item atual
      items[activeIndex].classList.remove('active');
      
      // Calcula o próximo índice
      let nextIndex = activeIndex + direction;
      
      // Se for o último item, volta para o primeiro
      if (nextIndex >= items.length) {
        nextIndex = 0;
      }
      // Se for o primeiro item, vai para o último
      if (nextIndex < 0) {
        nextIndex = items.length - 1;
      }
      
      // Adiciona a classe 'active' ao próximo item
      items[nextIndex].classList.add('active');
    }
  