const CANVA_SIZE = 1000;
const COLOR_BACKGROUND = "#FFF";
const NB_SQUARES = 40;
const SQUARE_SIZE = (CANVA_SIZE) / NB_SQUARES;

// colors 
let WHITE = "#FBF3F1";
let BLACK = "#0D1113";
let YELLOW = "#F2CC4A";
let RED = "#CC3D2D";
let BLUE = "#3B6AF4";

// recuperation des informations de la grille
let grid = [];

// fonction de création de la grille de base
function createGrid() {

  let x = 0;
  let y = 0;

  while (y < CANVA_SIZE) {
    while (x < CANVA_SIZE) {

      strokeWeight(1);
      let RANDOM_SQUARES = random(0, 10);
      let RANDOM_COLOR = random(0, 9);
      let SQUARE_COLOR = WHITE;

      if (RANDOM_COLOR < 1) {
        stroke(BLUE)
        fill(BLUE);
        SQUARE_COLOR = BLUE;
      } else if (RANDOM_COLOR < 2) {
        stroke(BLACK)
        fill(BLACK);
        SQUARE_COLOR = BLACK;
      } else if (RANDOM_COLOR < 3) {
        stroke(YELLOW)
        fill(YELLOW);
        SQUARE_COLOR = YELLOW;
      } else if (RANDOM_COLOR < 5) {
        stroke(RED)
        fill(RED);
        SQUARE_COLOR = RED;
      } else {
        stroke(WHITE)
        fill(WHITE);
        SQUARE_COLOR = WHITE;
      }

      for (let i = 0; i < RANDOM_SQUARES; i++) {
        grid.push({
          x: x,
          y: y,
          size: SQUARE_SIZE,
          color: SQUARE_COLOR
        });

        x += SQUARE_SIZE;
      }


    }

    y += SQUARE_SIZE;
    x = 0;

  }

  strokeWeight(3);
  stroke(COLOR_BACKGROUND);
  fill("#00000000")
  rect(0, 0, CANVA_SIZE, CANVA_SIZE);

  console.log(grid);

}

function drawGrid() {
  for (let i = 0; i < grid.length; i++) {
    let square = grid[i];
    stroke(square.color);
    fill(square.color);
    rect(square.x, square.y, square.size, square.size);
  }
}

function updateGrid() {
  for (let i = 0; i < grid.length; i++) {

    let square = grid[i];

    if (square.color === WHITE) {
      square.color = BLACK;
    } else if (square.color === BLACK) {
      square.color = YELLOW;
    } else if (square.color === YELLOW) {
      square.color = RED;
    } else if (square.color === RED) {
      square.color = BLUE;
    } else if (square.color === BLUE) {
      square.color = WHITE;
    }
  }
}

function mouseClicked() {
    updateGrid();
    drawGrid();
}

function moveGrid() {
    for (let i = 0; i < grid.length; i++) {
      let square = grid[i];
      square.x = (square.x+=SQUARE_SIZE) % CANVA_SIZE;
    }
}

function setup() {
  colorMode(HSB);
  frameRate(1);
  smooth();
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  createGrid();
  drawGrid();
}

function draw() {
  moveGrid();
  drawGrid();
}

