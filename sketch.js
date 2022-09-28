var box;


function setup() {
 createCanvas(600,700);

 box = createSprite(100,150,30,100);
 box.shapeColor="blue"
}

function draw() {
  background(0);

  drawSprites();
}