class Block{
    constructor(color){
        this.color = color;
        this.width = 16;
        this.height = 16;
        this.pos = {
            x: Math.floor(Math.random()*28)*16 + 100, 
            y: 5
        };
    }

    drawSelf = () => {
        context.fillStyle = this.color;
        context.fillRect(this.pos.x, this.pos.y, this.height, this.width);
    }

    fall = () => {
        if(this.pos.y >= 369) return;
        this.pos.y += 16;
        this.drawSelf();
    }

    moveX = (distance) => {
        let newX = this.pos.x + distance;
        if(newX < 100 || newX > 532) return;
        this.pos.x = newX;
        this.drawSelf();
    }
}