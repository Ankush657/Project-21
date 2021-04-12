var canvas;
var music;
var box1, box2, box3, box4;
var movingBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100, 570, 190, 20);
    box1.shapeColor = "green";

    box2 = createSprite(300, 570, 190, 20);
    box2.shapeColor = "purple";

    box3 = createSprite(500, 570, 190, 20);
    box3.shapeColor = "yellow";

    box4 = createSprite(700, 570, 190, 20);
    box4.shapeColor = "red";
    //create box sprite and give velocity
    movingBox = createSprite(200, 50, 30, 30);
    movingBox.shapeColor = "orange";
    movingBox.x = Math.round(random(40, 760));
    movingBox.velocityX = 3;
    movingBox.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    movingBox.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (box1.isTouching(movingBox) && movingBox.bounceOff(box1)) {
        movingBox.shapeColor = box1.shapeColor;
        music.play();
    }
    if (box3.isTouching(movingBox) && movingBox.bounceOff(box3)) {
        movingBox.shapeColor = box3.shapeColor;
        music.play();
    }
    if (box4.isTouching(movingBox) && movingBox.bounceOff(box4)) {
        movingBox.shapeColor = box4.shapeColor;
        music.play();
    }

    if (box2.isTouching(movingBox)) {
        movingBox.shapeColor = box2.shapeColor;
        music.stop();

        movingBox.velocityX = 0;
        movingBox.velocityY = 0;
    }
    drawSprites();
}