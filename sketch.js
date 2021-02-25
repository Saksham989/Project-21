var surface1, surface2, surface3, surface4;
var box;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    box=createSprite(random(20,750),300,50,50);
    box.shapeColor="white";
    box.velocityX=5;
    box.velocityY=5;

   
    surface1=createSprite(100,590,180,20);
    surface1.shapeColor="red";

    surface2=createSprite(300,590,180,20);
    surface2.shapeColor="green";

    surface3=createSprite(500,590,180,20);
    surface3.shapeColor="blue";

    surface4=createSprite(700,590,180,20);
    surface4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10));
   
    if(box.x<0){
      music.stop()
        box.velocityX=5
    }else if(box.x>800){
      music.stop()
        box.velocityX=-5
    }
   
  if(box.isTouching(surface4)){
    music.play()
    box.shapeColor="yellow";
    box.bounceOff(surface4)
    
  }
  
  else if(box.isTouching(surface3)){
    music.play()
    box.shapeColor="blue";
    box.bounceOff(surface3)
   
  }
    
  else if(box.isTouching(surface2)){
    music.play()
    box.shapeColor="green";
    box.bounceOff(surface2)
    box.velocityX=0;
    box.velocityY=0;
  }
  
  else if(box.isTouching(surface1)){
    music.play()
    box.shapeColor="red";
    box.bounceOff(surface1)
  }

  if (box.y<0){
    music.stop()
    box.velocityY=5
  }

  
   
    drawSprites()
}
