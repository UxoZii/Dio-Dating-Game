function preload(){
  
  spoooood = loadImage('images/spoooood.jpg');
  salt = loadImage('images/salt.jpg'); 
  dioyoumeme = loadImage('images/dioyoumeme.png'); 
  glebu = loadImage('images/glebu.jpg'); 
  walter = loadImage('images/walter.png'); 
  goga = loadImage('images/goga.png'); 
  slav = loadImage('images/slav.png'); 
  slobama = loadImage('images/slobama.png'); 
}

function setup() {
  canvas = createCanvas(1200, 800);
  canvas.position = (100,100);
  index = 0;
  textSize(30)
  displayString = "";
  c = 0;
  dialogueSpeed = 3;
}

function draw() {
  background(100);
  
  doScene(index);

}

function doScene(index){
  
  lettersMax = dialogue[index][1].length
  
  
  
  if (frameCount % dialogueSpeed == 0){
    displayString += dialogue[index][1].charAt(c);
    if (c != lettersMax) {c++}
  }
  
  if (c != lettersMax) {text(displayString,20,600)} else {text(dialogue[index][1],20,600)}
  for (var i = 0; i < dialogueImages[index].length; i++){
    var name = dialogueImages[index][i][0]
    var position = dialogueImages[index][i][1]
    doImage(name,position)
  }
  
  
}

function keyPressed(){
  index++; 
  displayString = "";
  c = 0;
}

function doImage(name,position){
  
  var x = 0;
  var y = 100;
  
  if (name == "spoooood") {img = spoooood}
  if (name == "salt") {img = salt}
  if (name == "dioyoumeme") {img = dioyoumeme}
  if (name == "glebu") {img = glebu}
  if (name == "walter") {img = walter}
  if (name == "goga") {img = goga}
  if (name == "slav") {img = slav}
  if (name == "slobama") {img = slobama}

  x = position
  
  if (position == 0) {x = 10}
  if (position == 1) {x = 300}
  if (position == 2) {x = 600}

  image(img,x,y)
}



