// Requisittos 2 e 3

// captura elemento
const palette = document.getElementById('color-palette');

// cria uma div para colocar o quadradinho com a cor
const black = document.createElement('div');

// configura elemento
black.className = 'color black';

// adiciona na página
palette.appendChild(black);

// fazer o mesmo com as outras 3 cores
function criaCor(palette, classes) {
  const cor = document.createElement('div');
  cor.className = classes;
  palette.appendChild(cor);
}
criaCor(palette, 'color yellow');
criaCor(palette, 'color pink');
criaCor(palette, 'color aqua');

// Requisito 4
// fazer um quadro de pixels, com 25 pixels
function criaPixels(n) {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < n; index += 1) {
    const onePixel = document.createElement('div');
    onePixel.className = 'pixel white';
    board.appendChild(onePixel);
  }
}
criaPixels(25);

// Requisito 6 defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
palette.children[0].classList.add('selected');

// Requisito 7
// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
function colorDefine(event) {
  const colorSelected = document.getElementsByClassName('selected');
  colorSelected[0].classList.remove('selected');
  event.target.classList.add('selected');
}

palette.addEventListener('click', colorDefine);

// Requisito 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function colorChange(event) {
  const colorSelected = document.getElementsByClassName('selected');
  const currentColor = colorSelected[0].classList[1];
  const removeColor = event.target.classList.remove(event.target.classList[1]);
  const newColor = event.target.classList.add(currentColor);
}
const board = document.getElementById('pixel-board');
board.addEventListener('click', colorChange);

// Requisito 9 Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function clearBoard() {
  const quadradinho = document.getElementsByClassName('pixel');
  for (let index = 0; index < quadradinho.length; index += 1) {
    quadradinho[index].classList.remove(quadradinho[index].classList[1]);
    quadradinho[index].classList.add('white');
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);
