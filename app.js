import {
    Ball
} from './ball.js';

import {
    Block
} from './block.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas); 

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, '#B5EA99', 30, 15);
        this.ball2 = new Ball(this.stageWidth, this.stageHeight, '#7ACC9F', 60, 10);
        this.block = new Block(260, 50, 200, 200);
        this.block2 = new Block(30, 150, 1000, 450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.block2.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block, this.block2);
        this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, this.block, this.block2);
    }
}

window.onload = () => {
    new App();
};