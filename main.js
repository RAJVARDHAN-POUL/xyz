function preload()
{

}

function setup()
{
    canvas=createCanvas(400,480);
    canvas.position(310,250);
    video=createCapture(VIDEO);
    video.hide();
    


}
function draw()
{
    image(video,0,0,400,480);
    
}
function take_snaphsot()
{
    save('student_name.png');

}

