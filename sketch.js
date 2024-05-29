// variablesofBall
let xBall=300
let yBall=200
let diameter=16

// velocityoftheBall
let velocityxBall=5
let velocityyBall=-5

// variablesofPaddle
let xPaddle=5
let yPaddle=150
let basePaddle=10
let heightPaddle=90

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  showBall();
  velocityBall();
  collisionEdge();
  showPaddle();
  motionPaddle();
}
  function showPaddle(){
  rect(xPaddle,yPaddle,basePaddle,heightPaddle)
  }

function motionPaddle(){
  if(keyIsDown(UP_ARROW))
    yPaddle -= 10
  if(keyIsDown(DOWN_ARROW)) 
    yPaddle += 10
}
  
  function showBall(){
  circle(xBall,yBall,diameter)
  }
  
  function velocityBall(){
  xBall+=velocityxBall
  yBall+=velocityyBall
  }
  
  function collisionEdge(){
  if(xBall+8>width||xBall-8<0)
    velocityxBall*=-1
  if(yBall+8>height||yBall-8<0)
    velocityyBall*=-1
  }
  
