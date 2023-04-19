const carouselImages = document.querySelector('.carousel-images');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
let currentPosition = 0;
const imageWidth = 250;

carouselPrev.addEventListener('click', () => {
  currentPosition += imageWidth;
  if (currentPosition > 0) {
    currentPosition = -imageWidth * 3;
  }
  carouselImages.style.transform = `translateX(${currentPosition}px)`;
});

carouselNext.addEventListener('click', () => {
  currentPosition -= imageWidth;
  if (currentPosition < -imageWidth * 3) {
    currentPosition = 0;
  }
  carouselImages.style.transform = `translateX(${currentPosition}px)`;
});
