//Made by: Muhammad Farooqi & Naeem Baig
//Jan 18th, 2023
//ICS4U-01
//Mrs. Manoil

let trail = [];
let c1;
let c2;
let card1;
let card2;
let card3;
let card4;
let card5;
let counter=-1;
let counterback=0;
let img1;
let img2;
let img3;
let img4;
let img5;


var mode = 0;

var gif_loadImg;


function preload(){
  
  img1 = loadImage('2 card.jpg')
  img2 = loadImage('Queencard.jpg')
  img3 = loadImage('5H.jpg')
  img4 = loadImage('4H.jpg')
  img5 = loadImage('3H.jpg')
  
  gif_loadImg = loadImage("Dealing.gif");
  
  
}

function setup() {
  createCanvas(600, 600);
  c1 = color(210, 43, 43);
  c2 = color(251, 206, 177);

  
  card1 = new Card1(img3, 450-0*100, 300,135, 80,  1);
  card2 = new Card2(img2, 450-1*100, 300,135, 80, 1);
  card3 = new Card3(img1, 450-2*100, 300,135, 80, 1);
  card4 = new Card4(img4, 450-3*100, 300,135, 80, 1);
  card5 = new Card5(img5, 450-4*100, 300,135, 80, 1);
  cardtemp1 = new Card3(img1, 450-2*100, 300,135, 80, 1);
  cardtemp2 = new Card1(img3, 450-0*100, 300,135, 80,  1);
}

function draw() {
  drawBackground();
  if (mode == 0){
    screen1();
  } else if (mode == 1){
    screen2();
  } else if (mode == 2){
    screen3();
  }
}

  function screen1(){//start up screen
       fill(0);
    image(gif_loadImg, 0, 0,600,600);
    
    //title
    fill(255)
    text("- Insertion Sorting -\n      - Animation -",150,80)
    textSize(20)
    text("By: Muhammad and Naeem",150,180)
 //////////////////////////////////////////
    //start button
    strokeWeight(5)
    stroke(0)
    fill(143,139,102)
    rect(210,250,180,80)
    fill(0)
    strokeWeight(1)
    textSize(32);
    text("Start",260,300)
/////////////////////////////////////////
  trail.push(new p5.Vector(mouseX, mouseY));
  if (trail.length > 25) {
    trail.shift();
  
  }
   for (let i = 0; i < trail.length; i++) {

   
           let p = trail[i];
   

    // The trail is smaller at the beginning,
    // and larger closer to the mouse
    let size = 30.0 * i / trail.length;
   
     let opac = 100 * i/trail.length;
     noStroke();
    
    
     fill(0,0,0,opac);
     
          circle(p.x, p.y, size);
     
 ////////////////////////////////////
 
  
  }

  }
function screen2(){
    c1 = color(200, 2, 80);
  c2 = color(102, 179, 255);
  text(counter+1+"  Cards in code",50,50)
  
///////////////////////////////////////////
  //button next
  fill(100)
  stroke(0)
  rect(300,520,120,80)
  strokeWeight(2)
  fill(0)
  textSize(20)
  text("Next",335,565)
  
  //button back
  fill(100)
  stroke(0)
  rect(150,520,120,80)
  strokeWeight(2)
  fill(0)
  textSize(20)
  text("Back",185,565) 
 
  

  ////////////////////////////////////////// 
    //////////////////////////////////////////
  cardtemp1.display();
  cardtemp2.display();
  card1.display();
  card2.display();
  card3.display();
  card4.display();
  card5.display();

  card1.move();
  card2.move();
  card3.move();
  card4.move();
  card5.move();
   
  
  ////////////////////////////////////////// 
  
  if(counter==0){
    
    fill(0);
    triangle(165, 475, 188, 430, 211, 475);
    fill(0)
    textSize(20)
    fill(0)
    text("Start at index 1 as cards 3\nand 4 are organized.\n\nTo swap index of arrays \ntemp = data[0]\ndata[0] = data[2] \ndata[2] = temp",240,50)
    text("Index [1]",165,495)
    
  }
  if(counter==1){
    fill(0)
 
   triangle(260, 475, 288, 420, 316, 475);
    fill(0)
    textSize(20)
    text("We move to index 2, since 2 is \nnot sorted, we move it to temp\n\nThere are two loops insertion sorting, \nan inner an an outer",240,50)
    text("Index [2]",260,495)
  }
  if(counter==2){
    fill(0)
 
   triangle(260, 475, 288, 420, 316, 475);
    fill(0)
    text("We shift 4 one space to the left\n\nThe outer loop selects the next \nelement to be slid into a sorted \nposition",240,50)
    text("Index [2]",260,495)
    
  }
   if(counter==3){
    fill(0)
   
   triangle(160, 475, 188, 420, 216, 475);
    fill(0)
    text("We shift 3 one space to the left\n\nThe inner loop slides the element \ninto the sorted position",240,50)
     text("Index [1]",160,495)
  }
   if(counter==4){
    fill(0)
 
   triangle(60, 475, 88, 420, 116, 475);
    fill(0)
    text("Then we move the 2 that was in\n temp to the front of the row",240,50)
     text("Index [0]",60,495)
  }
  
   if(counter==5){
    fill(0)
 
   triangle(460, 475, 488, 420, 516, 475);
    fill(0)
    text("Then we continue and see that 5 \nis not in its correct spot, we move \nit to temp",240,50)
     text("Index [4]",460,495)
  }
   if(counter==6){
    fill(0)
 
   triangle(460, 475, 488, 420, 516, 475);
    fill(0)
    text("We move the Queen to the last index",240,50)
     text("Index [4]",460,495)
     
  }
    if(counter==7){
    fill(0)
 
   triangle(360, 475, 388, 420, 416, 475);
    fill(0)
    text("We bring down the 5 from temp and \nput it in its correct sorted place",240,50)
      text("Index [3]",360,495)
  }
  

    fill(0);
  trail.push(new p5.Vector(mouseX, mouseY));
  if (trail.length > 15) {
    trail.shift();
  }
   for (let i = 0; i < trail.length; i++) {
    let p = trail[i];

    // The trail is smaller at the beginning,
    // and larger closer to the mouse
    let size = 20.0 * i / trail.length;
    circle(p.x, p.y, size);
  }

}
function screen3(){
  fill(0);
  image(gif_loadImg, 0, 0,600,600);
   c2 = color(159, 43, 104);
  c1 = color(221, 110, 15);

  //////////////////////////////////////////
  stroke(255)
  fill(255)
  textSize(20);
  text("Cards In Real Life      ",60,50)
  fill(100)
  stroke(0)
  rect(500,520,98,80)
  strokeWeight(2)
  fill(0)
  textSize(20)
  text("Screen 2",510,565)
  //button next
  fill(100)
  stroke(0)
  rect(300,520,120,80)
  strokeWeight(2)
  fill(0)
  textSize(20)
  text("Next",335,565)
  //button back
  fill(100)
  stroke(0)
  rect(150,520,120,80)
  strokeWeight(2)
  fill(0)
  textSize(20)
  text("Back",185,565) 
  ///////////////////////////////////////////
    //////////////////////////////////////////
  
  card1.display();
  card2.display();
  card3.display();
  card4.display();
  card5.display();

  card1.move();
  card2.move();
  card3.move();
  card4.move();
  card5.move();
  
    ////////////////////////////////////////// 
  
  if(counter==0){
   stroke(255) 
    fill(255);
    triangle(165, 475, 188, 430, 211, 475);
    fill(0)
    fill(255, 53, 23)
    textSize(20)
    text("Start at index 1 as cards 3\nand 4 are organized.",250,50)
    text("Index [1]",155,495)
    
  }
  if(counter==1){
    fill(255)
 stroke(255)
   triangle(260, 475, 288, 420, 316, 475);
    fill(0)
    fill(255, 53, 23)
    textSize(20)
    text("We move to index 2, since 2 is \nnot sorted, we move it to temp",250,50)
    text("Index [2]",260,495)
  }
  if(counter==2){
    fill(255)
 stroke(255)
   triangle(260, 475, 288, 420, 316, 475);
    fill(0)
    fill(255, 53, 23)
    text("We shift 4 one space to the left",250,50)
    text("Index [2]",260,495)
    
  }
   if(counter==3){
 fill(255)
  stroke(255) 
   triangle(160, 475, 188, 420, 216, 475);
    fill(0)
     fill(255, 53, 23)
    text("We shift 3 one space to the left",250,50)
     text("Index [1]",160,495)
  }
   if(counter==4){
  
    fill(255)
 stroke(255)
   triangle(60, 475, 88, 420, 116, 475);
    fill(0)
     fill(255, 53, 23)
    text("Then we move the 2 that was in\n temp to the front of the row",250,50)
     text("Index [0]",60,495)
  }
  
   if(counter==5){
    fill(255)
 stroke(255)
   triangle(460, 475, 488, 420, 516, 475);
    fill(0)
     fill(255, 53, 23)
    text("Then we continue and see that 5 \nis not in its correct spot, we move \nit to temp",250,50)
     text("Index [4]",460,495)
  }
   if(counter==6){
    fill(255)
 stroke(255)
   triangle(460, 475, 488, 420, 516, 475);
    fill(0)
     fill(255, 53, 23)
    text("We move the Queen to the last index",250,50)
     text("Index [4]",460,495)
     
  }
    if(counter==7){
    fill(255)
 stroke(255)
   triangle(360, 475, 388, 420, 416, 475);
    fill(0)
    strokeWeight(2);
    fill(255, 53, 23)
    text("We bring down the 5 from temp and \nput it in its correct sorted place",250,50)
      text("Index [3]",360,495)
  }
  
  
 

  trail.push(new p5.Vector(mouseX, mouseY));
  if (trail.length > 25) {
    trail.shift();
  }
   for (let i = 0; i < trail.length; i++) {
    let p = trail[i];

   
    let size = 30.0 * i / trail.length;
    circle(p.x, p.y, size);
  }
  ////////////////////////////////////////// 
  }

function mousePressed(){
  if(mode==0 && mouseX<=390 && mouseX>=210 && mouseY<=330 && mouseY>=250 ){
    mode=2;
  }
  if(mode==1 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 ||mode==2 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600){
    counter++
  }

    if(mode==1 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 && counter==4 ||mode==2 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 && counter==4 ){

      card3 = new Card3(img1, 450-4*100, 300,135, 80, 1);
  }
   if(mode==1 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 && counter==7 ||mode==2 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 && counter==7){
card1 = new Card1(img3, 450-1*100, 300,135, 80,  1);
  }
  if(mode==1 && mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 && counter==8){
mode=2
  }
  
  if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==1 || mode==2 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==1){
    counter=0
    
    card3 = new Card3(img1, 450-2*100, 300,135, 80, 1);
    
  }
   if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==2 || mode== 2&& mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==2){
    counter=1
   card4 = new Card4(img4, 450-3*100, 300,135, 80, 1);
  }
   if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==3 ||mode==2 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==3){
    counter=2
     
   card5 = new Card5(img5, 450-4*100, 300,135, 80, 1);
  }
   if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==4 || mode==2 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==4 ){
    counter=3
   card3 = new Card3(img1, 450-3*100, 100,135, 80, 1);
  }
   if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==5|| mode==2 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==5){
    counter=4
   card1 = new Card1(img3, 450-0*100, 300,135, 80,  1);
  }
   if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==6||mode==2 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==6){
    counter=5
   card2 = new Card2(img2, 450-1*100, 300,135, 80, 1);
  }
   if(mode==1 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==7 ||mode==2 && mouseX>=150 && mouseX<=270 && mouseY>=520 && mouseY<=600 && counter==7){
    counter=6
   card1 = new Card1(img3, 450-1*100, 100,135, 80,  1);
  }
  if(mode==2 &&  mouseX>=300 && mouseX<=420 && mouseY>=520 && mouseY<=600 && counter == 8 ){
    counter = 0;
  card1 = new Card1(img3, 450-0*100, 300,135, 80,  1);
  card2 = new Card2(img2, 450-1*100, 300,135, 80, 1);
  card3 = new Card3(img1, 450-2*100, 300,135, 80, 1);
  card4 = new Card4(img4, 450-3*100, 300,135, 80, 1);
  card5 = new Card5(img5, 450-4*100, 300,135, 80, 1);
    
  } if(mode == 2 &&  mouseX>=500 && mouseX<=620 && mouseY>=520 && mouseY<=600){
      mode = 1
       }
     
}

function drawBackground() {
   for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);  
  }
  noStroke();
 
 
  }

class Cards{
  constructor(p, x, y, w, l, s){
    this.p=p;
    this.x=x;
    this.y=y;
    this.w=w;
    this.l=l;
   
    this.s=s;   
  }

}

class Card1 extends Cards{
  constructor(p, x, y, w, l,  s){
  super(p, x, y, w, l,  s); 
    
  }
  
  display(){
    
  image(this.p, this.x, this.y, this.l, this.w)    
  }
  
  move(){
    //5
    if(counter == 5){
      this.x-=this.s;
    
    this.y-=((this.s)*2.2);
    
    if (this.x<=350 && this.y<= 100){
      this.s=0
            
    }
  }
     
}
  
}
class Card2 extends Cards{
  constructor(p, x, y, w, l, s){
  super(p, x, y, w, l, s);
        
  }
  
  display(){
  
    image(this.p, this.x, this.y, this.l, this.w)
    
  }
  
  move(){
     if(counter == 6){
      this.x+=this.s;
    if(this.x>= 450){
      this.s=0;
  }
   
    }
  }
  
}
class Card3 extends Cards{
  constructor(p, x, y, w, l, s){
  super(p, x, y, w, l, s);
        
  }
  
  display(){
   
    image(this.p, this.x, this.y, this.l, this.w)    
  }
  
  move(){
    if(counter == 1){
       this.x-=this.s;
    this.y-=((this.s)*2);
    
    if (this.x<=150 && this.y<= 100){
      this.s=0
  }    
    } 
  } 
  
}
class Card4 extends Cards{
  constructor(p, x, y, w, l,  s){
  super(p, x, y, w, l, s);
    
    
  }
  
  display(){
    
    image(this.p, this.x, this.y, this.l, this.w)
    
  }
  
  move(){
     if(counter == 2){
     this.x+= this.s
    if(this.x>= 250){
      this.s=0;
  }
        
    }
    
  }
  
}

class Card5 extends Cards{
  constructor(p, x, y, w, l, s){
  super(p, x, y, w, l, s);
    
    
  }
  
  display(){
    
    image(this.p, this.x, this.y, this.l, this.w)
    
  }
  
  move(){
    if(counter == 3){
    this.x+= this.s
    if(this.x>= 150){
      this.s=0;
  }   
          }  
}
}
