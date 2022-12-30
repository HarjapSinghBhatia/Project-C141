peter_pan_song=""
Harry_Potter_Theme_song=""
function setup(){
    canvas=createCanvas(500, 430)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 500, 430)
}
function preload(){
    peter_pan_song = loadSound("music2.mp3")
    Harry_Potter_Theme_song = loadSound("music.mp3")
}
