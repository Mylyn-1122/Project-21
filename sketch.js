var bullet, wall;

var weight, speed, thickness;

function setup() {
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)
  
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 70, 20);
  bullet.velocityX = (speed/2);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

}

function draw() {
  background(200,200,200);  

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(deformation < 10){
      bullet.shapeColor = color(0, 225, 0);
    }
    
    else{
      bullet.shapeColor = color(225, 0, 0);
    }

  }

  console.log(bullet.x);

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  else{
    return false
  }
}
