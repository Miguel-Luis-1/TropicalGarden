const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const size = 250;

nextBtn.addEventListener('click', () => {
  if (counter === 3) return;
  carouselImages.style.transition = 'transform 0.3s ease-in-out';
  counter++;
  carouselImages.style.transform = `translateX(-${size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter === 0) return;
  carouselImages.style.transition = 'transform 0.3s ease-in-out';
  counter--;
  carouselImages.style.transform = `translateX(-${size * counter}px)`;
});

carouselImages.addEventListener('transitionend', () => {
  if (carouselImages.children[counter].id === 'last-clone') {
    carouselImages.style.transition = 'none';
    counter = carouselImages.children.length - 2;
    carouselImages.style.transform = `translateX(-${size * counter}px)`;
  }
  if (carouselImages.children[counter].id === 'first-clone') {
    carouselImages.style.transition = 'none';
    counter = carouselImages.children.length - counter;
    carouselImages.style.transform = `translateX(-${size * counter}px)`;
  }
});

