nose_x=0;
nose_y=0;
 reyes_x=0;
reyes_y=0;
leyes_x=0;
leyes_y=0;


function preload()
{
    clownnose=loadImage('https://dejpknyizje2n.cloudfront.net/marketplace/products/clown-nose-on-white-background-sticker-1601854535.4041057.png');
clownglass=loadImage('https://tse2.mm.bing.net/th?id=OIP.h_UTKs9RM1EKqb1niSDSFgHaEH&pid=Api&P=0');
}




function setup(){
 canvas= createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 video.size(300,300);
posenet=ml5.poseNet(video,model_loaded);
posenet.on('pose',got_poses);
}

function draw()
{
    image(video,0,0,300,300);
     image(clownnose,nose_x,nose_y,30,30);
    image(clownglass,reyes_x,reyes_y,30,30);
    

}

function capture_image()
{

    save('image.png');


}

function model_loaded()
{
    console.log("poseNet model is intialized");
}


function got_poses(results)
{if(results.length > 0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-10;
       reyes_x=results[0].pose.rightEye.x-15;
       reyes_y=results[0].pose.rightEye.y-80;
       leyes_x=results[0].pose.leftEye.x-15;
       leyes_y=results[0].pose.leftEye.y-10;

    }

}