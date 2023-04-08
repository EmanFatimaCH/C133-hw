status = "";
electronics_image = "";
objects = [];

function preload(){
electronics_image = loadImage("electronics.jpg");
}

function setup(){
canvas = createCanvas(640,350);
canvas.position(315,200);
object_detectore = ml5.objectDetectore('cocossd',modelloaded);
document.getElementById("status").innerhtml = "Status: Detecting Objects";
}

function modelloaded(){
console.log("Model Loaded!");
status = true;
object_detectore.Dectect(electronics_image,gotResults);
}

function gotResults(results,error){
if(error){
console.error(error);
}
console.log(results);
objects = results;
}

function draw(){
image(electronics_image,0,0,640,350);
if(status != ""){
  for(1 = 0; < object.length; i++){
  document.getElementById("status").innerHTML = " Status: Objects Detected";
  
   fill("#fc03030");
   percent = floor(objects[i].label + " " + percent + "%" ,objects[i].x, objects[i].y);
   noFill();
   stroke("fc03030");
   rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  }
}
}