
// scripts.js
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');

function showSlide(index) {
  if (slides.length === 0) return;
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === slideIndex);
  });
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

// Auto slide a cada 5 segundos
setInterval(() => {
  changeSlide(1);
}, 5000);

// Inicialização do carrossel
document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
});

