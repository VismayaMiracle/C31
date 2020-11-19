class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.way=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

   if(this.body.position.x>200 && this.body.velocity.x>10){
    var pos=[this.body.position.x,this.body.position.y]
    this.way.push(pos)

   }

   
    for(var i =0;i< this.way.length ; i++) 
    {
image(this.image1,this.way[i][0],this.way[i][1])
    }

    super.display();
  }
}
