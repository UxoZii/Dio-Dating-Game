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
  textAlign(CENTER)
  text("press any button!",canvas.width/2,700)
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

function playMusic(music){
   if (!music.isPlaying()) {music.play()}
}

function doScene(index){
  image(scene,0,0)
  scene.resize(1200,800);
  
  lettersMax = dialogue[index][1].length
  textAlign(LEFT);
  
  for (var i = 0; i < dialogueImages[index].length; i++){
    var name = dialogueImages[index][i][0]
    var position = dialogueImages[index][i][1]
    doImage(name,position)
  }
  
  if (fadeIn) {
    doFadeIn()
    return
   }
    
  playMusic(date_open);
  
  if (frameCount % dialogueSpeed == 0){
    displayString += dialogue[index][1].charAt(c);
    if (c != lettersMax) {c++}
  }
  
  image(dialogueBox,0,500)
  fill(255);
  textSize(30)
  if (c != lettersMax) {text(displayString,20,700)} else {text(dialogue[index][1],20,700)}
  textStyle(BOLDITALIC);
  text(name+":",20,650)
  textStyle(NORMAL);
}
  
function keyPressed(){
  
  if (keyCode == 38 || keyCode == 40){
    if (choice.active){
      if (keyCode == 38) {choice.selection--} 
      if (keyCode == 40) {choice.selection++} 
      return
    }
  }
    
  if (keyCode == 32 && choice.active){
    choice.active = false;
    choice.doSelection();
    index++
    return
  }
  
  if (isTitleScreen){
  isTitleScreen = false;
  doki.stop();
  fadeIn = true;
  fade = 300;
  return
  }
  
  if (act.active){
    act.active = false
    return
  }
  
  if (fadeIn){
    fadeIn = false;
    return
  }
  
  if (c < lettersMax){
    c = lettersMax;
    return;
  }
  
  index++; 
  console.log(index);
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