const containerCarousel = document.querySelector('.container-carousel .carousel');
let isDown = false;
let startX;
let scrollLeft;

containerCarousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - containerCarousel.offsetLeft;
  scrollLeft = containerCarousel.scrollLeft;
});

containerCarousel.addEventListener('mouseleave', () => {
  isDown = false;
});

containerCarousel.addEventListener('mouseup', () => {
  isDown = false;
});

containerCarousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - containerCarousel.offsetLeft;
  const walk = (x - startX) * 2;
  containerCarousel.scrollLeft = scrollLeft - walk;
});