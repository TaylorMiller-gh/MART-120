var charX = 100;
var charY = 100;

var w = 87;
var a = 83;
var s = 65;
var d = 68;

var enemyX = [];
var enemyY = [];
var enemyDiameter = [];

var enemyXSpeed = [];
var enemyYSpeed = [];

var mousex;
var mousey;

var width = 700;
var height = 700;

function setup() {
  createCanvas(700,700);

  // Set speed, position, and size for 30 enemies using arrays
  for (var i = 0; i < 30; i++) {
    enemyXSpeed[i] = randomSpeed();
    enemyYSpeed[i] = randomSpeed();
    enemyX[i] = randomNum(700);
    enemyY[i] = randomNum(700);
    enemyDiameter[i] = randomNum(20);
  }

  // Create Player
  createPlayer(50,50);

}

function draw() {
  background(60, 179, 113);
  stroke(0);
  fill(0);

  //Borders and Exit
  borders(10);
  exit();

  //Player and Controls
  drawPlayer ();
  playerMovement ();

  //Enemy Array functions
  drawEnemies();
  moveEnemies();

  //Check for victory
  win();

  //Create circles with mouse
  createMouseCircle();
}

// Mouse Function
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}

function createMouseCircle() {
  fill(255,240,31);
  circle(mousex,mousey,15);
}

function borders (thickness) {
  rect(0,0,width,thickness);
  rect(0,0,thickness,height);
  rect(0,height-thickness,width,thickness)
  rect(width-thickness,0,thickness,height-50)
}

function exit () {
  textSize(16);
  text("Exit", 660, 680)
}

function win () {
  if(charX > 660 && charY > 660) {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", 350, 350)
  }
}

function createPlayer (x,y) {
  charX = x;
  charY = y;
}

function drawPlayer () {
  fill(176, 38, 255);
  circle(charX,charY,25);
}

function playerMovement () {
  if(keyIsDown(w)) {
    charY -= 10;
  }
  if(keyIsDown(s)) {
    charX -= 10;
  }
  if(keyIsDown(a)) {
    charY += 10;
  }
  if(keyIsDown(d)) {
    charX += 10;
  }
}

function drawEnemies() {
  for (var i = 0; i < enemyX.length; i++) {
    fill(255,64,64);
    circle(enemyX[i], enemyY[i], enemyDiameter[i]);
  }
}

function moveEnemies () {
  //Update enemy position arrays
  for (var i = 0; i < enemyX.length; i++) {
    enemyX[i] += enemyXSpeed[i];
    enemyY[i] += enemyYSpeed[i];

    // Return enemies to opposite border if neccessary
    if (enemyX[i] > width) {
      enemyX[i] = 0;
    }
    if (enemyX[i] < 0) {
      enemyX[i] = width;
    }
    if (enemyY[i] > height) {
      enemyY[i] = 0;
    }
    if (enemyY[i] < 0) {
      enemyY[i] = height;
    }
  }
}

// Mouse Click Function
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}

// Thanks for your help with this function in Week 12!
function createMouseCircle() {
  fill(255,240,31);
  circle(mousex,mousey,15);
}

function randomNum(num) {
  return Math.floor(Math.random() * num) + 10;
}

function randomSpeed() {
  return 3 + Math.floor(Math.random() * 5);
}
