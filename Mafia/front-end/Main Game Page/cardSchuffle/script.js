function shuffleImages() {
    const images = document.querySelectorAll('.card');
    const shuffledImages = Array.from(images).sort(() => Math.random() - 0.5);
    const container = document.querySelector('.card-container');
    container.innerHTML = '';
    shuffledImages.forEach(img => container.appendChild(img));
    container.classList.add('shuffle');
    setTimeout(() => container.classList.remove('shuffle'), 1500);
  }
  