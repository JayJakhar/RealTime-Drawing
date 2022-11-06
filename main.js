nosex=0;
nosey=0;
difference=0;
right_wrist_x=0;
left_wrist_x=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex+" nosey= "+nosey);
        right_wrist_x=results[0].pose.rightWrist.x;
        left_wrist_x=results[0].pose.leftWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("leftWristx= "+left_wrist_x+" rightWristx= "+right_wrist_x+" difference= "+difference);
    }
}
function draw()
{
    background('grey');
    document.getElementById("square_sides").innerHTML="Width And Height Of A Square Will Be = "+difference+" px";
    fill('#ff005c');
    stroke('#00ff75');
    square(nosex,nosey,difference);
}