song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
}
function setup()
{
    canvas=createCanvas(540,430);
    canvas.center();
    video=createCapture(VIDEO);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,540,430)
}
function modelLoaded()
{
    console.log("PoseNet Is Online");
}
function gotPoses(results)
{
    if(results.length > 0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("Left Wrist X = "+leftWristX+" And Y = "+leftWristY);
console.log("Right Wrist X = "+rightWristX+" And Y = "+rightWristY);
    }
    
}