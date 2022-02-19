leftwristx=0;
rightwristx=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(450,450);
    canvas = createCanvas(500,500);
    canvas.position(550,150);

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initiated');
}
function draw()
{
    background('yellow');
   text('Hello',leftwristx,rightwristx,difference);
    document.getElementById("update").innerHTML="font size of text = " +difference+"px";
}
function gotPoses(results)
{
     if(results.length>0)
     {
         console.log(results);
         leftwristx=results[0].pose.leftWrist.x;
         rightwristx=results[0].pose.rightWrist.x;
         difference=floor(leftwristx-rightwristx);
         console.log("difference="+difference);
         textSize(difference);
     }
}