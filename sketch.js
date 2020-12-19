var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor= "#804A00" 
  bullet.velocityX = speed;
  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = color(230,230,230);
}

function draw() {
  background("#927D7B");

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness *thickness *thickness);
    if (damage>10){
      wall.shapeColor = color("red");
    }
    if (damage<10){
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x-lwall.width;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}