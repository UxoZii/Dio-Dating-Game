function preload(){
  
  spoooood = loadImage('images/spoooood.jpg');
  salt = loadImage('images/salt.jpg'); 
  dioyoumeme = loadImage('images/dioyoumeme.png'); 
  glebu = loadImage('images/glebu.jpg'); 
  walter = loadImage('images/walter.png'); 
  goga = loadImage('images/goga.png'); 
  slav = loadImage('images/slav.png'); 
  slommy = loadImage('images/slommy.png'); 
  dialogueBox = loadImage("images/dialogueBox.png");
  scene = loadImage("images/scenes/scene1.jpg");
  titleScreen = loadImage("images/scenes/titlescreen.png");
  doki = loadSound("songs/doki.mp3");
  date_open = loadSound("songs/date_open.mp3");
}

function setup() {
  
  repSpoooood = 0;
  repSalt = 0;
  repDioyoumeme = 0;
  repGlebu = 0;
  repGoga = 0;
  repSlav = 0;
  repSlommy = 0;
  repAli = 0;
  repVito = 0;
  repSirux = 0;
  
  choice = new Choice(["test","test2"])
  doki.setVolume(0.5)
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
  act = new Act("Act 1","Introduction");
  act.active = true;
  notifications = []
}

function draw() {
  background(100);
  

  
  if (index == 2) {choice.active = true}
  
  if (isTitleScreen){
    if (doki.isPlaying() == false) {doki.play()}
    doTitleScreen();
    return
  }
    
  if (act.active) {
    act.tick()
    return
  }
  
  doScene(index);
    
  for (var i in notifications) {notifications[i].tick()}
    
    
  if (choice.active) {
    choice.tick()
    return
  }
    
  fill(color(225,225,225))
  textSize(18);
  textAlign(CENTER)
  text("press Space to continue",canvas.width/2,795)
}

    

    
