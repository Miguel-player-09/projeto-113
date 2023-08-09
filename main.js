let fillColor;
let strokeColor;

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(540, 280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    
    fillColor = document.getElementById('fillColor').value;
    strokeColor = document.getElementById('strokeColor').value;
    
    if (fillColor === "") {
        fillColor = "white"
    } else {
        fill(fillColor);
    }
    
    if (strokeColor === "") {
        strokeColor = "black"
    } else {
        stroke(strokeColor);
    }
    stroke(strokeColor)
    fill(fillColor)
    
    rect(0, 0, 640, 10);
    rect(0, 0, 10, 480);
    rect(0, 470, 640, 10);
    rect(630, 0, 10, 480);
    circle(0, 0, 100, 100);
    circle(640, 0, 100, 100);
    circle(0, 480, 100, 100);
    circle(640, 480, 100, 100);
}

function takeSnapshot() {
    save('image.png');
}