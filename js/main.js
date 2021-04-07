let frog;
let flies = [];
function setup() {
  createCanvas(600, 600);
  
  frog = new Frog();
  [...Array(10).keys()].forEach( () => {
    flies.push(new Fly(frog))
  })
  frog.gainAwareness(flies)
}

function draw() {
  background(135, 206, 235)
  frog.update()
  frog.checkEdges()
  frog.display()
  // background(64,64,64,random(5));
  // drawBackground()
  flies.forEach(fly => {
    fly.update()
    fly.checkEdges()
    fly.display()
  })
}

function drawBackground() {
  noStroke()
  
  //SKY
  fill(135, 206, 235)
  rect(0, 0, width, height/3);
  
  //SEA
  fill(0, 41, 58)
  rect(0, height/3, width, height*2/3);
  
  //GROUND
  fill(0,154,23)
  ellipse(width/2, height*5/6, width, height/3)
  rect(0, height*5/6, width, height/3);
  
}