//When the circle is clicked, it smoothly transitions to a random color. The square to the right is green when you can click the circle and red when you have to wait for the transition.

//Arrays for the current color values, and the target color values for the transition
let values = [0,0,0];
let targetValues = [0,0,0];

//Circle diameter variable
let diameter = 50;

//Returns a number between 0 and 255 (for the randomized color values)
function randomizeValue(){
    let rAmount = round(Math.random() * 255)
    return rAmount;
}

//Returns whether the current color value needs to increase or decrease to match the target
function transform(i){
    let direction = 0;
    if(values[i] < targetValues[i]){
        direction = 1;
    }else if(values[i] > targetValues[i]){
        direction = -1;
    }
    return direction;
}

//Makes the square green and returns true when there is no transition happening, and makes the square red and returns false when a transition is occuring
function check(){
    if(targetValues[0] == values[0] && targetValues[1] == values[1] && targetValues[2] == values[2]){
        fill("green");
        rect(450,275,50,50);
        return true;
    }else{
        fill("red");
        rect(450,275,50,50);
        return false;
    }
}

//Initial setup of the canvas
function setup(){
    createCanvas(800,600);
}

//Runs every frame
function draw(){
    background("#d6d6d6");

    //changes the current color values (increase or decrease) depending on what the transform function decides
    values[0] += transform(0);
    values[1] += transform(1);
    values[2] += transform(2);

    //Generates the indicator sqaure on the right depending on whether there is a current transition or not
    check();

    //Sets the fill based on the current color values of the array
    fill(values[0],values[1],values[2]);

    //Makes a circle at 200, 200, with a diameter of diameter
    circle(350,300,diameter);
}

//Runs when mouse is clicked
function mouseClicked(){
    //Runs if the check function is currently returning true
    if(check()){
        //Runs if the mouse is on the circle
        if(mouseX>(350-diameter) && mouseX<(350+diameter) && mouseY>(300-diameter) && mouseY<(300+diameter)){
            //Randomizes the target values based on the randomizeValue function
            targetValues[0] = randomizeValue();
            targetValues[1] = randomizeValue();
            targetValues[2] = randomizeValue();
        }
    }
}

