class box
{
    constructor(x,y,width,h){
        this.obj=bod.rectangle(x,y,width,h);
        this.width=width;
        this.height=h;
        Matter.World.add(w,this.obj);
    }
    display(){
        push();
            translate(this.obj.position.x,this.obj.position.y);
            rotate(this.obj.angle)
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
           pop ();
    }
}
