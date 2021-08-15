function preload(){
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(950,300,);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    
    ellipse(0, 0, 150, 150);
    ellipse(640, 0, 150, 150);
    ellipse(0, 480, 150, 150);
    ellipse(640, 480, 150, 150);
}

function take_snapshot(){
    save('my.png');
}

