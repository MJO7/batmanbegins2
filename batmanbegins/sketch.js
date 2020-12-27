const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var i;

var x;
var batman, thunderbolt;
var batmanAnimation, thunderboltAnimation;
var plinkos = [];
function preload() {
  thunder = loadAnimation("1.png", "2.png", "3.png", "4.png");
}

function setup() {
  createCanvas(800, 1600);

  engine = Engine.create();
  world = engine.world;
  // batman = createSprite(400, 1200, 10, 10);
  // batman.addAnimation("batmanAnimation", batmanAnimation);
  // log = createSprite(400, 800, 600, 10);
  thunder1 = createSprite(400, 100, 10, 10);
  thunder1.addAnimation("thunder", thunder);
  batman = new Umbrella(400, 1000, 600, 550);
  for (var i = 0; i < 100; i++) {
    plinkos.push(new Drop(random(0, 400), random(0, 400)));
  }
}

function draw() {
  background("black");
  drawSprites();
  Engine.update(engine);
  for (var i = 0; i < 5; i++) {
    drops = createSprite(random(0, 800), random(0, 100), 10, 10);
    drops.shapeColor = "blue";
    drops.velocityY = 12;
  }
  // drops.collide(log);

  // for (var k = 0; k < 0; k++) {
  //   drops[k].display();
  // }
  // for (var i = 0; i < 100; i++) {
  //   plinkos[i].display();
  // }
  batman.display();
  // plinkos.display();
  // drops.display();
}
