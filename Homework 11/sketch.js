var charX = 100;
var charY = 100;

var w = 87;
var a = 83;
var s = 65;
var d = 68;

var sporeX = 321;
var sporeY = 123;
var sporeSpeedX;
var sporeSpeedY;

var spourX = 321;
var spourY = 123;
var spourSpeedX;
var spourSpeedY;

var mousex;
var mousey;


function setup() {
  createCanvas(700,700);

  sporeSpeedX = 5 + Math.floor(Math.random() * 5);
  sporeSpeedY = 5 + Math.floor(Math.random() * 5);
  spourSpeedX = 5 + Math.floor(Math.random() * 5);
  spourSpeedY = 5 + Math.floor(Math.random() * 5);
}

function draw() {
  background(60, 179, 113);
  stroke(0);
  fill(0);

  textSize(16);
  text("Exit", 660, 680)

  // Character
  fill(176, 38, 255);
  circle(charX,charY,25);

  // Controls
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

  // Moving Enemy 1
  fill(255,64,64);
  circle(sporeX,sporeY, 10);
  sporeX += sporeSpeedX;
  sporeY += sporeSpeedY;

  // Return Spore to opposite border
  if(sporeX > 700) {
    sporeX = 0;
  }
  if(sporeX < 0) {
    sporeX = 700;
  }
  if(sporeY > 700) {
    sporeY = 0;
  }
  if(sporeY < 0) {
    sporeY = 700;
  }

  // Moving Enemy 2
  fill(255,64,64);
  circle(spourX,spourY, 10);
  spourX += spourSpeedX;
  spourY += spourSpeedY;

  // Return Enemy 2 to opposite border
  if(spourX > 700) {
    spourX = 0;
  }
  if(spourX < 0) {
    spourX = 700;
  }
  if(spourY > 700) {
    spourY = 0;
  }
  if(spourY < 0) {
    spourY = 700;
  }

  fill(255,240,31);
  circle(mousex,mousey,15);

  // Win Sequence
  if(charX > 680 && charY > 680) {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", 350, 350)
  }

}

// Mouse Function
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}
