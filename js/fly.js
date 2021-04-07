class Fly {
  constructor(frog) {
    this.location = createVector(random(50, width-50), random(50, height-50))
    this.zeroVector = createVector(0,0)
    this.velocity = this.zeroVector.copy()
    this.acceleration = this.zeroVector.copy()
    this.direction = this.zeroVector.copy()
    this.time = random(1000, 10000)
    this.flySpeed = 0
    this.frog = frog
    this.frogVector = this.zeroVector.copy()
    // this.gravity = createVector(0, 0.001)
 }

  update() {
    this.time += 0.01
    
    this.frogVector = p5.Vector.sub(frog.location, this.location)
    if (this.frogVector.mag() < 50) {
      this.velocity.add(this.frogVector.copy().setMag(-1))
    }

      

    // this.acceleration.add(this.direction)

    this.velocity.add(this.direction)
    this.velocity.limit(10)
    this.location.add(this.velocity)
    this.direction = p5.Vector.random2D()
    
  }
  checkEdges() {
    
    if (this.location.x < 0) {
      this.location.x = width
    }
    if (this.location.x > width) {
      this.location.x = 0
    }
    if (this.location.y < 0) {
      let flip = createVector()
      flip.set(0, this.velocity.y)
      if (flip.heading() < 0)
        this.direction.add(flip.mult(-2))
    }
    if (this.location.y > height) {
      let flip = createVector()
      flip.set(0, this.velocity.y)
      if (flip.heading() > 0)
        this.direction.add(flip.mult(-2))
    }
    
  }

  display() {
    stroke(230);
    strokeWeight(1.5);
    fill(25);
    ellipse(this.location.x, this.location.y, 6, 6)
  }
}