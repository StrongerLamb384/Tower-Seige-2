class Block {
  constructor(x, y, width, height){
    //super(x,y,50,50)
    this.Visibility = 255;
    var options = {
      restitution:1,
      friction:100,
  }
  this.Visiblity = 255;
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
    //this.image = loadImage("sprites/wood1.png");
  }
  display(){
        if (this.body.speed < 3) {
          var angle = this.body.angle;
          var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        } else {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          pop();
        }
    }
  }




