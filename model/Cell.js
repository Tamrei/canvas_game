'use strict';

var Cell = function(line, row, radius) {
    this.line = line;
    this.row = row;
    this.radius = radius;
    this.isEmpty = true;
    var figure;

    this.getXStartCord = function () {
        return (this.line - 1) * this.radius;
    };
    this.getXEndCord = function () {
        return (this.line - 1) * this.radius + this.radius;
    };
    this.getYStartCord = function () {
        return (this.row - 1) * this.radius;
    };
    this.getYEndCord = function () {
        return (this.row - 1) * this.radius + this.radius;
    };

    this.draw = function () {
        ctx.rect((this.line - 1) * this.radius, (this.row - 1) * this.radius, this.radius, this.radius);
        ctx.stroke();
    };
    this.isCollide = function (x, y) {
        if (this.getXStartCord() <= x && this.getXEndCord() >= x
            && this.getYStartCord() <= y && this.getYEndCord() >= y) return true;
    };
    this.drawFigure = function (isTic) {
        if (!figure) {
            figure = new Figure(this.getXStartCord() + radius / 2, this.getYStartCord() + radius / 2, radius / 3, isTic);
            figure.draw();
            this.isEmpty = false;
        }
    };
    this.getFigure = function() {
        if (figure) {
            if (figure.isTac) return "Tac";
            else return "Toc";
        }
    };
};
