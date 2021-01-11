function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(255,255,255);  
  background(0);
  let hr = map(mouseX, 0, width, 0, 175);
  let mn = map(mouseX, 0, width, 40, 300);
  fill(255, hr, 0);
  ellipse(width/2, height/2);
  drawSprites();
}
function map() {

scAngle = map(sc,0,60,0,360);
Push();
rotate(scAngle);
stroke(255,0,0);
strokewhight(7);
line(0,0,100,0);
pop()
Push();
rotate(hrAngle);
stroke(255,0,0);
strokewhight(7);
line(0,0,100,0);
pop()
Push();
rotate(mnAngle);
stroke(255,0,0);
strokewhight(7);
line(0,0,100,0);
pop()

}
