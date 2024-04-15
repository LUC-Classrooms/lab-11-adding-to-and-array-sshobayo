
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); // create an empty array with 1 space

function setup() { // set up the sketch
  createCanvas(500, 300); set the size of the canvas
  dots[0] = new Dot(width/2, height/2); 
  // initialize the dots array index 0 with a new instance of the Dot class
} // end of the setup() function

function draw() { // draaw somethign (60 times/second)
  background(200); // set the background color
  
  for(let i = 0; i < dots.length; i++){ // loop through the Array
    dots[i].move(); // move ach object
    dots[i].display();  // display each object
  }
  textSize(24); // set the text text size
  fill(100, 0, 200); // set the text color
  text("'dots' array length: " + dots.length, 100, 100); // display the size of the array on screen

} // end of draw()

function mousePressed(){ // when the mouse is clicked
  let obj = new Dot(mouseX, mouseY); // crate a new Dot objecg

  dots.push(obj); //add it to the Dots array
  console.log(dots.length); // print the size of the array in the console
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){ // contructor function
  
  this.x = X; // set the x property from the first argument
  this.y = Y; // set the y property from the second argument
  this.w = random (20, 50); // rnadom width
  this.sx = random(-5, 5); // set x speed
  this.sy = random(-5, 5); // set y speed
  this.r = random(0, 255); // set red level
  this.g = random(0, 255); // set green level
  this.b = random(0, 255); // set blue level
  
  this.display = function(){ // show the object
    fill(this.r, this.g, this.b); // set the color
    ellipse(this.x, this.y, this.w, this.w); // draw a cirle
  } // end of display method
  
  this.move = function(){ // move the objet
    this.x += this.sx; // update horizontal location
    this.y += this.sy; // update vertical location
    
    if (this.x < 0 || this.x > width){ if off screen horizontally
        this.sx *= -1; // change direction
    } // end of if statement
    if (this.y < 0 || this.y > height){ // if off screen vertically
        this.sy *= -1; // change direction
    } // end of if
  } // end move method
    
} // end of Dot constructor
