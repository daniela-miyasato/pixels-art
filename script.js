// captura elemento
let paleta = document.getElementById('color-palette');

// cria uma div para colocar o quadradinho com a cor
let pink = document.createElement('div');

// configura elemento
pink.className = 'color pink';

// adiciona na página
paleta.appendChild(pink);

// fazer o mesmo com as outras 3 cores
function criaCor(paleta, classes) {
  let cor = document.createElement('div');
  cor.className = classes;
  paleta.appendChild(cor);
}
criaCor(paleta, 'color yellow');
criaCor(paleta, 'color purple');
criaCor(paleta, 'color aqua');
