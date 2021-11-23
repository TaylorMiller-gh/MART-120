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

var width = 700;
var height = 700;

function setup() {
  createCanvas(700,700);

  sporeSpeedX = 3 + Math.floor(Math.random() * 5);
  sporeSpeedY = 3 + Math.floor(Math.random() * 5);
  spourSpeedX = 3 + Math.floor(Math.random() * 5);
  spourSpeedY = 3 + Math.floor(Math.random() * 5);

  // Create Player
  createPlayer(50,50);
  createEnemy1(100,50);
  createEnemy2(50,100);
}

function draw() {
  background(60, 179, 113);
  stroke(0);
  fill(0);

  borders(10);
  exit();
  drawPlayer ();
  playerMovement ();
  drawEnemy1();
  moveEnemy1();
  drawEnemy2();
  moveEnemy2();
  win();

  //Drawn on mouse click. Not sure how to make this work in the mouseClick function.
  fill(255,240,31);
  circle(mousex,mousey,15);

}

// Mouse Function
function mouseClicked()
{
  mousex = mouseX;
  mousey = mouseY;
}

function borders (thickness)
{
  rect(0,0,width,thickness);
  rect(0,0,thickness,height);
  rect(0,height-thickness,width,thickness)
  rect(width-thickness,0,thickness,height-50)
}

function exit ()
{
  textSize(16);
  text("Exit", 660, 680)
}

function createPlayer (x,y)
{
  charX = x;
  charY = y;
}

function drawPlayer ()
{
  fill(176, 38, 255);
  circle(charX,charY,25);
}

function playerMovement ()
{
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

function createEnemy1(x,y)
{
  sporeX = x;
  sporeY = y;
}

function drawEnemy1()
{
  fill(255,64,64);
  circle(sporeX,sporeY, 10);
}

function moveEnemy1()
{
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
}

function createEnemy2(x,y)
{
  spourX = x;
  spourY = y;
}

function drawEnemy2()
{
  fill(255,64,64);
  circle(spourX,spourY, 10);
}

function moveEnemy2()
{
  spourX += spourSpeedX;
  spourY += spourSpeedY;

  // Return Enemy 2 to opposite border
  if(spourX > 700)
  {
    spourX = 0;
  }
  if(spourX < 0)
  {
    spourX = 700;
  }
  if(spourY > 700)
  {
    spourY = 0;
  }
  if(spourY < 0)
  {
    spourY = 700;
  }
}

function win ()
{
  if(charX > 660 && charY > 660)
  {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", 350, 350)
  }
}
