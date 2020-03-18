class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      strokeWeight(4);
      stroke(76, 187, 23);
      fill(111,62,21);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };