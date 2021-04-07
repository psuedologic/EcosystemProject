class Frog {
  constructor() {
    this.location = createVector(random(0+20, width-50), 50)
    this.zeroVector = createVector(0,0)
    this.velocity = this.zeroVector.copy()
    this.acceleration = 0
    this.gravity = createVector(0, 0.2)
    this.onGround = false
    this.flies
 }

 gainAwareness(flies) {
   this.flies = flies
 }

  update() {
    if (this.location.y < height - 10 ) {
      this.velocity.add(this.gravity)
    }
    
    if (this.onGround) {
      if (this.nextHop > 0) {
        this.nextHop -= 1/30
      } else {
        if (this.velocity.equals(this.zeroVector)) {
          let closestFly = flies.reduce( (closestFly, fly) => {
            fly.distanceFromFrog = p5.Vector.sub(fly.location, this.location).mag()
            return fly.distanceFromFrog < closestFly.distanceFromFrog ?
                fly : closestFly
          })
          let dir = p5.Vector.sub(closestFly.location, this.location).heading()
          constrain(dir, -PI/8, -PI*7/8)
          this.velocity = p5.Vector.fromAngle(dir, random(5,15));
        }
        this.velocity.add(this.acceleration)
      }
    }
    this.velocity.limit(10)
    this.location.add(this.velocity);
  }
  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height - 10) {
      this.onGround = true
      this.location.y = height - 10;
      this.velocity = this.zeroVector.copy()
      this.nextHop = random(2,3)
     
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }

  display() {
    stroke(230);
    strokeWeight(2);
    fill(10, 75, 50);
    ellipse(this.location.x, this.location.y, 30, 16)
  }
}