class Mover {
  constructor(location,velocity) {
    this.center = createVector(300,300)
    this.location =  p5.Vector.random2D()
      .setMag(random(0,300))
      .add(this.center);
    this.velocity = p5.Vector.random2D();
    this.acceleration = p5.Vector.random2D();
    this.mouseVector = createVector(mouseX, mouseY)
  }
  
  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }
    
    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
  
  update() {
    let newMouseVector = createVector(mouseX, mouseY)
    if (newMouseVector.equals(this.mouseVector)) {
       this.centerAcceleration = p5.Vector.sub(this.center, this.location)
      .setMag(1.2)
      this.velocity.add(this.centerAcceleration)
    } else {
      //Mouse motion
      this.mouseVector = newMouseVector
      this.mouseAcceleration = p5.Vector.sub(this.mouseVector, this.location)
      
      let newMag = map(this.mouseAcceleration.mag(), 0, 600, 3, 0.1)
      
      this.mouseAcceleration.setMag(newMag)
      this.velocity.add(this.mouseAcceleration)
    }
    this.velocity.add(this.acceleration)
    
    this.velocity.limit(10)
    this.location.add(this.velocity);
    
    if (this.velocity.mag() >= 10) {
      this.acceleration = p5.Vector.random2D();
    }
    
  }
  
  display() {
    stroke(200);
    strokeWeight(3);
    fill(10,75,50);
    ellipse(this.location.x,this.location.y, 16,16)
  }
}