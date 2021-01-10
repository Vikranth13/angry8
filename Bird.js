class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.redimage = loadImage("sprites/bird.png");
    this.yellowimage = loadImage("sprites/yellowbird.png");
    this.blueimage = loadImage("sprites/bluebird.png");

    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visiblitiy = 255;
    
  }
displayRed()
{
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.redimage, 0, 0, this.width, this.height);
  pop();
}

displayBlue()
{
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.blueimage, 0, 0, this.width, this.height);
  pop();
}
displayYellow()
{
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.yellowimage, 0, 0, this.width, this.height);
  pop();
}





  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push()
      this.visibility=-0.5;
      tint(255,this.visiblity);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
