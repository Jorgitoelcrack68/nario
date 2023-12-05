function preload() {
    world_start=loadSound("world_start.wav")
    setSprites()
    MarioAnimation()
}
function setup() {
    canvas=createCanvas(1440,336)
    instializeInSetup(mario)
}
function draw() {
   game()
}