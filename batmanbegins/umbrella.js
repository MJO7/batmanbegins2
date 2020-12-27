class Umbrella {
  constructor(x, y, width, height, angle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.animation = loadAnimation(
      "walking_1.png",
      "walking_2.png",
      "walking_3.png",
      "walking_4.png",
      "walking_5.png",
      "walking_6.png",
      "walking_7.png",
      "walking_8.png"
    );
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    animation(this.animation, 0, 0, this.width, this.height);
    pop();
  }
}
