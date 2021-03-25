var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle
var gamestate = "play";
var count = 0;



function setup() {
 var canvas =  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   for (var k = 0; k <=width; k = k + 80) 
   {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);

text("1000",20,650)
text("1000",100,650)
text("500",180,650)
text("500",260,650)
text("100",340,650)
text("100",420,650)
text("50",500,650);
text("50",580,650);
text("10",660,650);
text("10",740,650);
 
  ground.display();

  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y > 590 && particle.body.position.y < 600)
      {
          if(particle.body.position.x < 160)
          {
            
              score +=1000;
          
            
            if(count === 5)
            gamestate = "end";
            
          }

          if(particle.body.position.x > 166 && particle.body.position.x < 330)
          {
            score+=500;
            if(count === 5)
            gamestate = "end";
          }

           if(particle.body.position.x > 331 && particle.body.position.x < 485)
          {
            score += 100;
            if(count === 5)
            gamestate = "end";
          }

          if(particle.body.position.x > 486 && particle.body.position.x < 650)
          {
            score += 50;
            if(count === 5)
            gamestate = "end";
          }

          if(particle.body.position.x > 651 && particle.body.position.x < 805)
          {
            score += 10;
            if(count === 5)
            gamestate = "end";
          }
      }
    }
   

    if(gamestate === "end")
    {
      textSize(30);
      fill("blue")
      text("GAME OVER",200,200);
    }
  
}

function mousePressed()
{

    particle = new Particle(mouseX, 10,10);
    count++
}