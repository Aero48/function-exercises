//Initialize circle variables
let circleX = 100;
let circleY = 100;
let circleD = 20;
let circleVelX = 5;
let circleVelY = 5;

//Initialize rectangle variables
let rectX = 0;
let rectY = 550;
let rectW = 150;
let rectH = 25;

//Sets up canvas size
function setup(){
    createCanvas(800,600);
}

//Returns true when circle collides rectangle (factors in circle diameter)
function collideRect(){
     if(circleX + circleD > rectX && circleX - circleD < rectX + rectW) {
         if(circleY + circleD > rectY && circleY - circleD < rectY + rectH) {
               return true;
         }
    }
    return false;
}

//Returns true when circle collides with the side walls (factors in circle diameter)
function collideWallX(){
    if(circleX+circleD>width || circleX<circleD){
        return true;
    }
    return false;
}

//Returns true when circle collides with the top (factors in circle diameter)
function collideWallY(){
    if(circleY<circleD){
        return true;
    }
    return false;
}

//Returns true when the circle collides with the bottom (factors in circle diameter)
function collideBottom(){
    if(circleY+circleD>height){
        return true;
    }
    return false;
}

function draw(){
    //Refreshes the background to white
    background("#d6d6d6");

    //Draws in the circle
    fill("#99ffb6")
    circle(circleX,circleY,circleD);

    //Updates circle's x and y based on velocity
    circleX += circleVelX;
    circleY += circleVelY;

    //Reverses circle's Y velocity when colliding with the rectangle or top of the screen
    if(collideRect() || collideWallY()){
        circleVelY *= -1;
    }

    //Reverses circle's X velocity when colliding with the side walls
    if(collideWallX()){
        circleVelX *= -1;
    }

    //Respawns the circle when it reaches the bottom
    if(collideBottom()){
        circleX = 100;
        circleY = 100;
    }

    //Generates the rectangle coords based on the mouse position
    rectX = mouseX - rectW/2;
    fill("#99c9ff")
    rect(rectX,rectY,rectW,rectH);
    
}