function setup() {
  createCanvas(500,600);
}

function draw() {
  background(220);
  textSize(16);
  text('mfw Homework 9', 10, 20);
  text('Taylor Miller', 10, 40);

  //forehead Circles
  circle(250,90,20);
  circle(250,160,15);

  //Eyes - biggest circles first
  circle(150,250,30);
  circle(350,250,30);
  circle(150,250,20);
  circle(350,250,20);

  //Eye sockets (Top and Outer lines emphasized by redrawing with 1 changing point set)
  //Left eye variables

  var eyeLX = 100;
  var eyeLY = 230;

  //Right eye Variables
  var eyeRX = 400;
  var eyeRY = 230;

  for (let i = 0; i <5; i++) {
    //Left Top Line
    line(eyeLX,eyeLY, 175,250);

    //Left Outer line
    line(eyeLX,eyeLY,130,265);

    eyeLX--;
    eyeLY--;

    //Right Top Line
    line(325,250, eyeRX,eyeRY);

    //Right Outer line
    line(eyeRX,eyeRY,370,265);

    eyeRX++;
    eyeRY--;
  };

  //Left Inner socket
  line(175,250,190,265);
  line(174,249,190,265);
  line(173,248,190,265);

  //Right inner socket
  line(325,250,310,265);
  line(326,249,310,265);
  line(327,248,310,265);

  //left brow (Same emphasis process - 3rd point added to 'slant' corner)
  //Left brow variable
  var browLA = 100;
  var browLB = 210;
  var browLC = 230;

  //Right Brow variables
  var browRA = 230;
  var browRB = 400;
  var browRC = 210;

  for (let i = 0; i <5; i++){

    //Left Brow
    line(browLA, browLB, 175, browLC);
    browLA--;
    browLB--;
    browLC--;

    //Right Brow
    line(325,browRA, browRB,browRC);
    browRA--;
    browRB++;
    browRC--;
  }


  //nose
  ellipse(250,265,30,5);
  ellipse(250,275,32,6);
  ellipse(250,285,35,7);
  ellipse(250,297,37,8);
  ellipse(250,310,40,9);
  ellipse(250,325,42.5,11);
  ellipse(250,340,45,12);

  //left cheek
  line(100,315,135,350);
  line(135,350,165,345);
  //Left Jaw
  line(100,345,135,440);
  line(135,440,228,500);

  //Right cheek
  line(400,315,365,350);
  line(365,350,335,345);
  //Right jaw
  line(400,345,365,440);
  line(365,440,272,500);

  //Chin
  triangle(228,500,250,440,272,500);

  //Forehead pattern dot thing

  //"L" variables deviate left first, "R" deviates right
  var xL = 250;
  var xR = 250;
  var yL = 215;
  var yR = 215;

  //start below forehad circle and make first "V"
  for (let i = 0; i < 5; i++) {

    circle(xL,yL,6);
    point(xL,yL);
    xL = xL - 8;
    yL = yL - 10;


    circle(xR,yR,6);
    point(xR,yR);
    xR = xR + 8;
    yR = yR - 10;
  }

  //Change direction (reverse arithmetic for "x" variables)
  for (let i = 0; i < 5; i++) {
    circle(xL,yL,6);
    point(xL,yL);
    xL = xL + 8;
    yL = yL - 10;

    circle(xR,yR,6);
    point(xR,yR);
    xR = xR - 8;
    yR = yR - 10;
  }

  //Continue direction at 'faster' pace for "fade"
  for (let i = 0; i < 5; i++) {
    circle(xL,yL,6);
    point(xL,yL);
    xL = xL + 12;
    yL = yL - 15;

    circle(xR,yR,6);
    point(xR,yR);
    xR = xR - 12;
    yR = yR - 15;
  }

}
