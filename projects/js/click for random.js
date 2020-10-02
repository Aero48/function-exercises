//Array that stores all the colors
let colors = ["#4287f5","#4affc3","#ff143c","#ffdb0f"];
//Circle diameter variable
let diameter = 50;
//Sets the initial color of the circle
let currentColor = colors[0];

//Canvas setup
function setup(){
    createCanvas(800,600);
}

//Function that returns a random value based on the constraints of the array (Works even when new colors are added)
function randomizeColor(){
    return round(Math.random()*(colors.length-1));
}

//Canvas refresh + circle draw
function draw(){
    background("#ccfcff");
    //Sets the fill color to whatever the randomizer chooses
    fill(currentColor);
    //Creates a circle in the middle of the canvas with a diameter based on the set variable
    circle(width/2,height/2,diameter);
}

//This is the stuff that happens when the circle is clicked on
function mouseClicked(){
    //Checks to see if the mouse is within the bounds of the circle
    if(mouseX > (width/2) - diameter && mouseX < (width/2) + diameter && mouseY > (height/2) - diameter && mouseY < (height/2) + diameter){
        //Sets the currentColor variable to the return of the randomizeColor function
        currentColor = colors[randomizeColor()]
    }
}