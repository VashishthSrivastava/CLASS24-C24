class Ground {

constructor(){

var g = {

isStatic:true

}
this.body=Bodies.rectangle(600,380,1200,20,g);
World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill ("brown");
    rect(pos.x,pos.y,1200,20);
}
}