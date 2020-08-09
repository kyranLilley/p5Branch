
function setup() {
    createCanvas(900, 900); //set canvis size 
    
    
  }
  
  function draw() {
    background(220); //background color
    rotate(PI / 35); // rotate 35 degree's 
    fill(0,0,255);  // fill the quad with a color
    noStroke(); // no stroke as simple as the name suggests

    quad(38, 31, 86, 20, 69, 63, 30, 76); //quad with size 

    
  }
  

  