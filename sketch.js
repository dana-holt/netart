

let img;

function preload() {
  img1 = loadImage('https://raw.githubusercontent.com/dana-holt/netart/main/blimp.png');
  img = loadImage("https://raw.githubusercontent.com/dana-holt/netart/main/poptropicamap.jpg");
}



function setup() {
  createCanvas(850,500);
  let cnv = createCanvas(850, 500)
  cnv.position(300,150,50)
}

function draw() {
	background(img, 255)
  image(img1, mouseX, mouseY);


}
