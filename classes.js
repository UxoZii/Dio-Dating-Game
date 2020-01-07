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

class Act{
  constructor(name,text){
    this.name = name;
    this.text = text;
    this.fade = 255;
    this.active = false;
    this.boxTimer = 255;
    this.boxTimer2 = 550;
  }
  
  tick(){
    this.boxTimer -= 1.5;
    this.boxTimer2-= 1.5;
    fill(0);
    rect(0,0,canvas.width,canvas.height);
    fill(255,255,255)
    textSize(60);
    textAlign(CENTER);
    text(this.name,canvas.width/2,300);
    textSize(30);
    text(this.text,canvas.width/2,400);
    fill(0,0,0,this.boxTimer);
    rect(0,0,1200,350);
    fill(0,0,0,this.boxTimer2);
    rect(0,360,1200,600);
    
    
    if (this.boxTimer2 < -200){
      this.boxTimer = 255
      this.boxTimer2 = 450
      this.active = false
    } 
  }
}

class Choice{
  constructor(choices){
    this.active = false;
    this.choices = choices;
    this.selection = 0;
  }
  
  tick(){
    for (var i = 0; i < this.choices.length; i++){
      fill(235,200,255);
      rect(100,200+i*100,1000,50);
      textSize(30);
      textAlign(CENTER);
      fill(0)
      
      if (this.selection >= this.choices.length) {this.selection = 0}
      if (this.selection < 0) {this.selection = this.choices.length-1}
      
      text(this.choices[i],canvas.width/2,200+i*100+35)
      circle(10,200+this.selection*100+35,20)
      
    }
  }
  
  doSelection(){
    
    //OPTION 0 AT INDEX 2
    if (index == 2 && this.selection == 0){
      append(notifications, new Notification("good job",0));
     
    }
  }
  
}

class Notification{
  constructor(string,status){
    this.string = string;
    this.status = status;
    this.lifeTime = 100;
    this.y = notifications.length*100;
  }
  
  tick(){
    this.lifeTime--;
    if (this.lifeTime < 0) {this.y--}
    fill(255,209,225);
    rect(800,0+this.y,395,100,20);
    stroke(255,51,153)
    rect(800,0+this.y,395,100,20);
    noStroke();
    if (status == 0) {fill(0,204,0)} else {fill(255,0,0)}
    textAlign(LEFT);
    text(this.string,810,50+this.y);
    
    if (this.y < -100) {notifications.splice(notifications.indexOf(this),1);}
  }
}