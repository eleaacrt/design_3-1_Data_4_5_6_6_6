// concepts : complémentarité, transparence, dualité, chance


const CANVA_SIZE = 1000;
const COLOR_BACKGROUND = "#FFF";
const NB_SQUARES = 40;
const SQUARE_SIZE = (CANVA_SIZE) / NB_SQUARES;

// colors 
const WHITE = "#FBF3F1";
const BLACK = "#0D1113";
const YELLOW = "#F2CC4A";
const RED = "#CC3D2D";
const BLUE = "#3B6AF4";

function setup() {
  colorMode(HSB);
  createCanvas(CANVA_SIZE, CANVA_SIZE);

  let x = 0;
  let y = 0;

  while (y < CANVA_SIZE) {
    while (x < CANVA_SIZE) {
      strokeWeight(1);
      let RANDOM_SQUARES = random(0, 10);
      let RANDOM_COLOR = random(0, 9);

      if (RANDOM_COLOR < 1) {
        stroke(BLUE)
        fill(BLUE);
      } else if (RANDOM_COLOR < 2) {
        stroke(BLACK)
        fill(BLACK);
      } else if (RANDOM_COLOR < 3) {
        stroke(YELLOW)
        fill(YELLOW);
      } else if (RANDOM_COLOR > 2 && RANDOM_COLOR < 5) {
        stroke(RED)
        fill(RED);
      } else {
        stroke(WHITE)
        fill(WHITE);
      }

      for (let i = 0; i < RANDOM_SQUARES; i++) {
        // choisir une couleur aléatoire
        rect(x, y, SQUARE_SIZE, SQUARE_SIZE);
        x += SQUARE_SIZE;
      }
      noStroke();
    }
    y += SQUARE_SIZE;
    x = 0;
  }

  strokeWeight(3);
  stroke(COLOR_BACKGROUND);
  fill("#00000000")
  rect(0, 0, CANVA_SIZE, CANVA_SIZE);

}