// captura elemento
let paleta = document.getElementById('color-palette');

// cria uma div para colocar o quadradinho com a cor
let black = document.createElement('div');

// configura elemento
black.className = 'color black';

// adiciona na página
paleta.appendChild(black);

// fazer o mesmo com as outras 3 cores
function criaCor(paleta, classes) {
  let cor = document.createElement('div');
  cor.className = classes;
  paleta.appendChild(cor);
}
criaCor(paleta, 'color yellow');
criaCor(paleta, 'color pink');
criaCor(paleta, 'color aqua');
