const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ball2;
var ground;

function setup() {
    createCanvas(400,400);
  
    engine = Engine.create();
    world = engine.world;
    
     var ball_options = {
      restitution: 0.95,
      frictionAir:0.01
    }

    var ball2_options = {
      restitution: 0.4,
      frictionAir:0.5
    }
     
     var ground_options ={
       isStatic : true
     };
    
  
    ground = Bodies.rectangle(50,390,400,20,ground_options);
    World.add(world,ground);
  
    ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(200,10,20,ball2_options);
    World.add(world,ball2);
    
  }

  function draw() 
  {
    background(51);
    Engine.update(engine);
    
    
  
    ellipse(ball.position.x,ball.position.y,20);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball2.position.x,ball2.position.y,20);
   
  
    
    
  }

