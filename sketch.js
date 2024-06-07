function setup() {
    createCanvas(600, 600);
    background(0);
  }
  
  function draw(){
    stroke("red")
    fill("blue")
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35)
  }  
}  