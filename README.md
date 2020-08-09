# p5Branch

Task 1---------------------
Task one was one of the first times working with p5.

The frustration dealing with task 1 was situate around where to place the quad and 
rotating it. 

changing the location of the quad was the biggest challange as it kept distorting the quad into unknown shapes.
I was not sure what caused this until i found online what the specific values were doing. 

function draw() {
    background(220); //background color
    rotate(PI / 35); // rotate 35 degree's 
    fill(0,0,255);  // fill the quad with a color
    noStroke(); // no stroke as simple as the name suggests

    quad(38, 31, 86, 20, 69, 63, 30, 76); //quad with size 
    ^^^^-----^^^^^^^^^^^^^^^^^^^^

    These numbers above are what i am talking about and some refrence the positions of each corner and the x/y/z axis if applicable. 

    After figuring out this i was able to understand what numbers needed to change the hight and length of the quad.

    The screenshots of this have been added to the p5 Branch under the readme file with the name "task 1" each photo will have the same name as the given task until i figure out how to add photos to the readme i will talk to you about this when i see you next! 
    

(p5, https://p5js.org/reference/#/p5/quad)



Task 2---------------------
(p5, https://p5js.org/reference/#/p5/rect)
Setting a rectangle with a stroke weight and the color red was the aim of this task.

I had no big issues getting around this one more just getting more familiar with p5

I did find it hard to comprehend the part where we had to have our shape with no background color. 

the images wil be added to the main folder under the readme i will show what i am talking about there.

I was curious if the background was suppose to be white or if the background was suppose to match the canvis as in no background color of its own. 

I settled on having no background color what so ever so it was white. 

 
   function draw() {
    background(220); // background color
    stroke('red');  //set stroke color
    strokeWeight(6); //set stroke thickness
    rect(30, 20, 80, 55, 20); //rect with the values to specify the size and location on the canvis
  

  As you can see here there is no defined background color making the default white. so no background color.

Task 3---------------------
(p5 , https://p5js.org/reference/#/p5/cylinder)

The final task i messaged you because i did not read the task correctly but have rotated both shapes while i 
was playing with the tools. 
Other than this i was not able to get the cylinder showing in the p5 extention on vs code nor the website.
After a while it dawned on me that the problem was adding WEBGL to the canvis 


function setup() { //set canvis size 
  createCanvas(400, 400, WEBGL); // WEBGL is used to allow 3d shapes to work in browser 
}

As you can see here () one of the values are set as WEBGL this enabled me to see the 3d shapes inside a web page local host.