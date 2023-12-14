nosex=0;
nosey=0;
diffrence=0;
leftWristx=0;
rightWristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+" nosey="+nosey);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        diffrence=floor(leftWristx-rightWristx);
        console.log("leftWristx="+leftWristx+" rightWristx="+rightWristx);
        

    }
}
function draw(){
    background('black');
    document.getElementById("square_side").innerHTML="Width and height of a square will be = "+diffrence+"px";
    fill("blue");
    stroke("red");
    square(nosex,nosey,diffrence);
}
