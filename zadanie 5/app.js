/**
 * Napisz w Vanilla JS kod, który będzie wyświetlał w przeglądarce kwadrat o wymiarach 50px x 50px.
    - kwadrat ma poruszać się od lewej do prawej krawędzi przeglądarki z dowolną prędkością, 
    - gdy kwadrat jest przy prawej krawędzi przeglądarki ma mieć wymiary 100px na 100px przy lewej ma zachować początkowe wymiary (50px x 50px)
    - kwadrat ma zmieniać swój kolor co 20px na losowy
 */

const sq = document.createElement('div');
sq.style.backgroundColor = 'rgb(0,0,0)';
sq.style.height = '50px';
sq.style.width = '50px';
sq.style.position = 'absolute';
sq.style.bottom = '0px';
sq.style.left = '0px';
document.body.appendChild(sq);

/* https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Math/random */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColorRGBString() {
  let r = getRandomIntInclusive(0, 255);
  let g = getRandomIntInclusive(0, 255);
  let b = getRandomIntInclusive(0, 255);
  return `rgb(${r},${g},${b})`;
}

const maxLeft = window.innerWidth - 100;
let pos = 0;
let delta = 0;

const id = setInterval(frame, 2);
function frame() {
  if (pos === maxLeft) {
    clearInterval(id);
  } else {
    //wartość delta zależy od szerokości przeglądarki (a właściwie: maxLeft) i rośnie w zakresie 0-50, co pozwala zwiększyć wymiary od 50px do 100px przy prawej krawędzi okna.
    delta = Math.ceil((pos / maxLeft) * 50);
    sq.style.width = `${50 + delta}px`;
    sq.style.height = `${50 + delta}px`;

    if (pos % 20 === 0) {
      sq.style.backgroundColor = getRandomColorRGBString();
    }

    sq.style.left = `${pos++}px`;
  }
}
