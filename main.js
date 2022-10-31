noseX=0;
noseY=0;
difference = 0;
rightWristX= 0;
leftWristX = 0;

function setup()
{ video = createCapture(VIDEO);
 canvas = createCanvas(550,600) ;
 video.size(500,500) 
 canvas.position(560,150)
  poseNet = ml5.poseNet(video, modelloaded);
   poseNet.on('pose', gotPoses);
 } 
 
 function draw(){ 
     background("#19e39c");
 fill('#F90093');
 stroke('#F90034');
 textSize('10');
 text('Gouri','text to be displayed',550,150);
} 

function modelloaded()
{ console.log("Initialize modelloaded") ;

}
 function gotPoses(results)

{ if(results.length > 0) { console.log(results); } }


function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX +"noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}








































