status = "";
accessories_image = "";
objects = [];

function preload(){
accessories_image = loadImage("accessories.jpg");
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
object_detectore.Dectect(accessories_image,gotResults);
}

function gotResults(results,error){
if(error){
console.error(error);
}
console.log(results);
objects = results;
}

function draw(){
image(baloon_image,0,0,640,350);
if(status != ""){
  for(1 = 0; < object.length; i++){
  document.getElementById("status").innerHTML = " Status: Objects Detected";
  
   fill("#fc03030");
   percent = floor(objects[i].label + " " + percent + "%" ,objects[i].x, objects[i].y);
   noFill();
   stroke("fc03030");
   rect(objects[i].x - 800, objects[i].y - 520, objects[i].width - 910, objects[i].height - 2640);
  }
}
}