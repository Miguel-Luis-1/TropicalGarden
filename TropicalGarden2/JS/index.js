// Seleciona o elemento HTML com a classe '.carousel'
const carousel = document.querySelector('.carouselprodutos');

// Define as variáveis ​​que serão usadas para determinar se o mouse está pressionado, 
// a posição inicial do mouse em relação ao elemento HTML e a posição inicial de 
// rolagem do elemento HTML
let isDown = false;
let startX;
let scrollLeft;

// Adiciona um evento de mouse para quando o botão esquerdo do mouse é pressionado
carouselprodutos.addEventListener('mousedown', (e) => {
  isDown = true; // define que o mouse está pressionado
  startX = e.pageX - carouselprodutos.offsetLeft; // define a posição inicial do mouse em relação ao elemento HTML
  scrollLeft = carouselprodutos.scrollLeft; // define a posição inicial de rolagem do elemento HTML
});

// Adiciona um evento de mouse para quando o cursor do mouse sai do elemento HTML
carouselprodutos.addEventListener('mouseleave', () => {
  isDown = false; // define que o mouse não está pressionado
});

// Adiciona um evento de mouse para quando o botão esquerdo do mouse é solto
carouselprodutos.addEventListener('mouseup', () => {
  isDown = false; // define que o mouse não está pressionado
});

// Adiciona um evento de mouse para quando o cursor do mouse é movido dentro do elemento HTML
carouselprodutos.addEventListener('mousemove', (e) => {
  if (!isDown) return; // se o mouse não estiver pressionado, não faça nada
  e.preventDefault(); // previne o comportamento padrão do navegador quando o mouse está pressionado e se move
  const x = e.pageX - carouselprodutos.offsetLeft; // calcula a posição atual do mouse em relação ao elemento HTML
  const walk = (x - startX) * 2; // calcula a quantidade que o elemento HTML deve ser rolado com base na diferença entre a posição atual do mouse e a posição inicial do mouse
  carouselprodutos.scrollLeft = scrollLeft - walk; // define a nova posição de rolagem do elemento HTML
});

