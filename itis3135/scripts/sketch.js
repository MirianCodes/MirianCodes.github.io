function setup() {
  createCanvas(400, 400);
  background(1);
  strokeWeight(2);
  colorMode(HSB);
  describe('This sketch demonstrates the use of mouse events to draw lines on the canvas. The color of the lines is determined by the mouse position.');
}
function  mouseDragged() {
  let linehue = mouseX - mouseY;
  stroke(random(255), 100, 100);
  line(mouseX, mouseY, pmouseX, pmouseY);
}