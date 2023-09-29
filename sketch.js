var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(250,230,20,30);
}

function draw() 
{
  background("red");
  if (keyDown("up")) {
box.y = box.y -3;
  }
  if (keyDown("down")) {
    box.y = box.y +3;
      }
  if (keyDown("left")) {
        box.x = box.x -3;
          }
 if (keyDown("right")) {
            box.x = box.x +3;
              }
drawSprites()
}




