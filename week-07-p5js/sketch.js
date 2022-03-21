function setup() {
  createCanvas(400, 400);
  height(500);
  width(500);
}

function draw() {
  background(220);
  circle(200, 200, 300);
}
let x = 0;
function draw() {
  if (x > 100) {
    x = 0;
  }
  background(220);
  fill(0, 255, 0);
  ellipse(x, 50, 40, 40);
  x = x + 0.1;
  describe('green circle at x pos ' + round(x) + ' moving to the right');
}
function draw() {
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  if (mouseX < 50 && mouseY < 50) {
    cursor(CROSS);
  } else if (mouseX > 50 && mouseY < 50) {
    cursor('progress');
  } else if (mouseX > 50 && mouseY > 50) {
    cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
  } else {
    cursor('grab');
  }
}
let-circle= random(0, width);
let-circle = random(0, height);
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(32);

  let circleX = 150;
  let circleY = 200;
  let circleDiameter = 100;

  circle(circleX, circleY, circleDiameter);
}
