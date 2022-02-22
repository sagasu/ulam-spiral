let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

let stepSize = 5;
let totalSteps;

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function setup() {
  createCanvas(500, 500);

  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;

  background(51);
}

function draw() {

  if (isPrime(step)) {
    fill(255);
    stroke(255);
    circle(x, y, stepSize * 0.5);
  }
  
  line(x, y, px, py);
  px = x;
  py = y;

  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }
  
  if (step % numSteps === 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 === 0) numSteps++;
  }

  step++;
  
  if (step > totalSteps) noLoop();
}
