class Buttons {
    constructor (){
this.button = createButton("MOTIVATION BEHIND");
this.button2 = createButton("START");
this.button3 = createButton("HOME");
this.button4 = createButton("Next");
this.button5 = createButton("lvl3");
//this.button5 = createButton("lvl4");

}
display(){
this.button.position(200,400);
this.button2.position(400,400);
this.button3.position(800,10);
this.button4.position(800,120)
this.button5.position(800,140)
//this.button6.position(800,160)    
this.button.mousePressed(()=>{
gameState=1
this.button2.hide();
this.button.hide();
this.button4.hide();

play.stop();
//play2.play();this.button6.show();
//this.button6.hide();



if(gameState === 1);

background(bg2);
})
this.button2.mousePressed(()=>{
gameState=2
this.button.hide();
this.button2.hide();
//MarioSound.play();

play.stop();
play2.stop();
if(gameState === 2){
background(bg3);
image(Mario,100,280,100,100)    

}
})
    
this.button3.mousePressed(()=>{
this.button2.show();
this.button.show();
this.button4.show();
MarioSound.stop();
//play.play();
//play2.stop();
gameState=0
})

this.button4.mousePressed(()=>{
    gameState = 3
    
    if(gameState===3){
        background(bg4);
        this.button4.hide();
    this.button5.show();
        
    }
})
   this.button5.mousePressed(()=>{
       gameState=4
       this.button5.hide();
       if(gameState===4){
           background(bg5);
       }
   })
}
    
}

    




