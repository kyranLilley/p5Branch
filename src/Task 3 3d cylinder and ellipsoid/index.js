function setup() { //set canvis size 
  createCanvas(400, 400, WEBGL); // WEBGL is used to allow 3d shapes to work in browser 
}

function draw() {
  background(205, 105, 94); // color background
  rotateX(frameCount * 0.01);  //rotate x axis
  rotateZ(frameCount * 0.01); //rotate z axis
  cylinder(40, 90);       //Draw cylinder to the specified values

  
  translate(width / 4, 0, 0); // move new shape to the side
  ellipsoid(30, 40, 40);    // create ellipsoid with specified values
}