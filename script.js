// Requisittos 2 e 3

// captura elemento
let palette = document.getElementById('color-palette');

// cria uma div para colocar o quadradinho com a cor
let black = document.createElement('div');

// configura elemento
black.className = 'color black';

// adiciona na página
palette.appendChild(black);

// fazer o mesmo com as outras 3 cores
function criaCor(palette, classes) {
  let cor = document.createElement('div');
  cor.className = classes;
  palette.appendChild(cor);
}
criaCor(palette, 'color yellow');
criaCor(palette, 'color pink');
criaCor(palette, 'color aqua');

// Requisito 4
// fazer um quadro de pixels, com 25 pixels

// fazer 1 pixel
// let board = document.getElementById('pixel-board');
// let onePixel = document.createElement('div');
// onePixel.className = 'pixel white';
// board.appendChild(onePixel);

// adicionar 25 pixels.

function criaPixels(n) {
  let board = document.getElementById('pixel-board');
  for (let index = 0; index < n; index += 1) {
    let onePixel = document.createElement('div');
    onePixel.className = 'pixel white';
    board.appendChild(onePixel);
  }
}
criaPixels(25);

// Requisito 6 defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

palette.children[0].classList.add('selected');

// Requisito 7
// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

function colorChange(event) {
  let colorSelected = document.getElementsByClassName('selected');
  colorSelected[0].classList.remove('selected');
  event.target.classList.add('selected');
}

palette.addEventListener('click', colorChange);
