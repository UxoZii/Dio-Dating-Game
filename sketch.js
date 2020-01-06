function preload(){
  
  spoooood = loadImage('images/spoooood.jpg');
  salt = loadImage('images/salt.jpg'); 
  dioyoumeme = loadImage('images/dioyoumeme.png'); 
  glebu = loadImage('images/glebu.jpg'); 
  walter = loadImage('images/walter.png'); 
  goga = loadImage('images/goga.png'); 
  slav = loadImage('images/slav.png'); 
  slobama = loadImage('images/slobama.png'); 
  dialogueBox = loadImage("images/dialogueBox.png");
  scene = loadImage("images/scenes/scene1.jpg");
  titleScreen = loadImage("images/scenes/titlescreen.png");
  doki = loadSound("songs/doki.mp3");
}

function setup() {
  canvas = createCanvas(1200, 800);
  canvas.position = (20,20)
  index = 0;
  textSize(30)
  displayString = "";
  c = 0;
  dialogueSpeed = 3;
  isTitleScreen = true;
  titleScreenCircles = []
  spawnTitleScreenCircles();
  offY = 0;
  fadeIn = false;
  fade = 0;
}

function draw() {
  background(100);
  
  if (isTitleScreen){
    if (doki.isPlaying() == false) {doki.play()}
    doTitleScreen();
    return
  }
  
  doScene(index);
  fill(color(225,225,225))
  textSize(18);
  text("press Space to continue",500,795)
}

function doScene(index){
  image(scene,0,0)
  scene.resize(1200,800);
  
  
  
  
  lettersMax = dialogue[index][1].length
  

  

  
  for (var i = 0; i < dialogueImages[index].length; i++){
    var name = dialogueImages[index][i][0]
    var position = dialogueImages[index][i][1]
    doImage(name,position)
  }
  
  if (fadeIn) {
    doFadeIn()
    return
   }
  
  if (frameCount % dialogueSpeed == 0){
    displayString += dialogue[index][1].charAt(c);
    if (c != lettersMax) {c++}
  }
  
  image(dialogueBox,0,500)
  textSize(30)
  if (c != lettersMax) {text(displayString,20,700)} else {text(dialogue[index][1],20,700)}

  
  text(name+":",20,650)
  
  
  
}

function keyPressed(){
  
  if (isTitleScreen){
  isTitleScreen = false;
  doki.stop();
  fadeIn = true;
  fade = 300;
  return
  }
  
  if (fadeIn){
  return
  }
  
  if (c < lettersMax){
    c = lettersMax;
    return;
  }
  
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

function doTitleScreen(){
  background(255,255,252);
  fill(color(252,220,239))
  noStroke();

  
  for (var i in titleScreenCircles){
    titleScreenCircles[i].tick(); 
  }
  
  if (titleScreenCircles[0].x > -5000){
    titleScreenCircles = []
    spawnTitleScreenCircles()
  }
  
  
  
  image(titleScreen,0,0+Math.cos(frameCount/30)*5)
  textSize(60+Math.cos(frameCount/25)*2);
  fill(color(255,150,150))
  text("press any button!",380,700)
  
}
  
class Circle {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  tick(){
    this.x += 0.25;
    this.y += 0.25;
    circle(this.x,this.y,130)
  }
  
}

function spawnTitleScreenCircles(){
  for (var y = -30; y < 6; y++){
    for (var x = -30; x < 6; x++){
      append(titleScreenCircles,new Circle(20+x*300+(y%2 * 150),20+y*150))
    }
  }
}

function doFadeIn(){
  
  fill(color(0,0,0,fade));
  fade--;
  rect(0,0,canvas.width,canvas.height) 
  if (fade < 50){
   fadeIn = false; 
  }
  
}