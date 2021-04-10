class Buffer{
    constructor(){
        this.blocks = [];
    }

    draw = () => {
        context.fillStyle = "black";
        context.fillRect(0, 0, 640, 400);
        context.fillStyle = "white";
        context.fillRect(100, 5, 448, 384);
        this.blocks.forEach(function(block){
            context.fillStyle = block.color;
            context.fillRect(block.pos.x, block.pos.y, 16, 16);
        })
    }

    add = (block) => {
        this.blocks.push(block);
    }
}