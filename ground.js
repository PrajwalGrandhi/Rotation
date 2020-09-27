class gro
{
    constructor(x,y,width,h){
        this.obj=bod.rectangle(x,y,width,h,{isStatic:true});
        this.width=width;
        this.height=h;
        Matter.World.add(w,this.obj);
    }
    display(){
            
        rectMode(CENTER);
  rect(this.obj.position.x,this.obj.position.y,this.width,this.height);
    }
}
