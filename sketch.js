const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3,box4;
var ball1,ball2,ball3,ball4;

function setup(){
    var canvas = createCanvas(1350,500);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,490,1350,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    box1 = Bodies.rectangle(200,100,50,10,ball_options);
    World.add(world,box1);

    box2 = Bodies.rectangle(300,100,100,100,ball_options);
    World.add(world,box2);

    box3 = Bodies.rectangle(150,100,50,50,ball_options);
    World.add(world,box3);

    box4 = Bodies.rectangle(600,100,10,10,ball_options);
    World.add(world,box4);

    ball1 = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(500,100,30, ball_options);
    World.add(world,ball2);

    ball3= Bodies.circle(700,100,40, ball_options);
    World.add(world,ball3);

    ball4 = Bodies.circle(700,100,10, ball_options);
    World.add(world,ball4);

    ball5 = Bodies.circle(800,100,10, ball_options);
    World.add(world,ball5);

    ball6 = Bodies.circle(500,100,10, ball_options);
    World.add(world,ball6);




    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,2400,20);

      
    rectMode(CENTER);
    fill("lime");
    rect(box1.position.x,box1.position.y,100,100);

   
    rectMode(CENTER);
    fill("pink");
    rect(box2.position.x,box2.position.y,50,50);

    rectMode(CENTER);
    fill("red");
    rect(box3.position.x,box3.position.y,100,20);

    rectMode(CENTER);
    fill("green");
    rect(box4.position.x,box4.position.y,200,20);


    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(ball1.position.x, ball1.position.y, 20, 20);

    ellipseMode(RADIUS);
    fill("white");
    ellipse(ball2.position.x, ball2.position.y, 30, 30);

    ellipseMode(RADIUS);
    fill("grey");
    ellipse(ball3.position.x, ball3.position.y, 26, 20);

    ellipseMode(RADIUS);
    fill("orange");
    ellipse(ball4.position.x, ball4.position.y, 50, 20);

    ellipseMode(RADIUS);
    fill("lightblue");
    ellipse(ball5.position.x, ball5.position.y, 86, 30);

    ellipseMode(RADIUS);
    fill("lightgreen");
    ellipse(ball6.position.x, ball6.position.y, 50, 10);
}