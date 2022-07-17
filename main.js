function preload(){

}

function draw(){
image(video , 0, 0, 640, 480);
tint(tint_color);
rect(30, 20, 55, 55);
fill("#0000ff");

circle(100, 250, 80);
fill("#00ff00");

ellipse(250, 300, 55, 55);
fill("#ff0000");

rect(330, 50, 75, 75);
fill("#ffff00");

circle(500, 250, 80);
fill("#b14384");
}

function take_snapshot(){
  save('student_name.png');
}


function setup(){
    canvas= createCanvas(640 , 480);
    canvas.position(250 , 250);
    video= createCapture(VIDEO);
    video.hide();
    
    tint_color="";
}