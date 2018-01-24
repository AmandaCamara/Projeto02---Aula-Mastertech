let titulo = document.querySelector('h1');
let texto = document.querySelector('p');

function mudarTitulo() {
  titulo.innerHTML /* innerHTML significa - pegar variavel H1 e substituir no html pela seguinte frase */ = 'Venha conhecer';
}

function mudarTexto() {
  texto.style.color = 'lightblue';
}
