class CartonBox {
    constructor(ctx, size = 100) {
        this.ctx = ctx;
        this.ctx.fillStyle = "#AD8762";
        this.ctx.strokeStyle = "#1a1a00";
        this.ctx.lineWidth = 1;
        this.h = size;
        this.initX = this.ctx.canvas.width / 2;
        this.initY = this.ctx.canvas.height / 2;
    }

    draw() {
        this.drawBackground();
        this.drawFront();
    }

    drawBackground() {
        this.ctx.beginPath();

        this.ctx.moveTo(this.initX, this.initY - this.getY(this.h, 20));
        this.ctx.lineTo(this.initX, this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX + this.getX(this.h,20), this.initY);
        this.ctx.lineTo(this.initX, this.initY - this.getY(this.h, 20));
        this.ctx.lineTo(this.initX - this.getX(this.h,20), this.initY);
        this.ctx.lineTo(this.initX, this.initY + this.getY(this.h, 20));

        this.closeDraw();
    }

    drawFront() {
        this.drawLeftSide();
        this.drawRighSide();
        this.drawLeftTop();
        this.drawRightTop();
    }

    drawRighSide() {
        this.ctx.beginPath();

        this.ctx.moveTo(this.initX, this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX, this.h + this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX + this.getX(this.h,20), this.initY + this.h);
        this.ctx.lineTo(this.initX + this.getX(this.h,20), this.initY);

        this.closeDraw();
    }

    drawLeftSide() {
        this.ctx.beginPath();

        this.ctx.moveTo(this.initX, this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX, this.h + this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX - this.getX(this.h,20), this.initY + this.h);
        this.ctx.lineTo(this.initX - this.getX(this.h,20), this.initY);

        this.closeDraw();
    }

    drawLeftTop() {
        this.ctx.beginPath();

        this.ctx.moveTo(this.initX, this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX - this.getY(this.h/2, 45), this.initY + this.getY(this.h, 20) + this.getX(this.h / 2,45));
        this.ctx.lineTo(this.initX - this.getX(this.h,20) - this.getY(this.h/2, 45) , this.initY + this.getX(this.h / 2,45));
        this.ctx.lineTo(this.initX - this.getX(this.h,20), this.initY);

        this.closeDraw();
    }

    drawRightTop() {
        this.ctx.beginPath();

        this.ctx.moveTo(this.initX, this.initY + this.getY(this.h, 20));
        this.ctx.lineTo(this.initX + this.getY(this.h/2, 45), this.initY + this.getY(this.h, 20) + this.getX(this.h / 2,45));
        this.ctx.lineTo(this.initX + this.getX(this.h,20) + this.getY(this.h/2, 45) , this.initY + this.getX(this.h / 2,45));
        this.ctx.lineTo(this.initX + this.getX(this.h,20), this.initY);

        this.closeDraw();
    }

    closeDraw() {
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.restore();
    }

    getX(h, degree) {
        return h * Math.cos(this.getDegrees(degree));
    }

    getY(h, degree) {
        return h * Math.sin(this.getDegrees(degree));
    }

    getDegrees(degree) {
        return degree * (Math.PI / 180);
    }
}

window.CartonBox = CartonBox;