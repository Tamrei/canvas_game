'use strict';

var Board = function (cellSize) {
    this.cells = [];
    var isTicTurn = false;
    var isGameOver = false;
    var turnNumb = 0;

    var cellSize = cellSize;

    this.isTicTurn = function () {
        return isTicTurn;
    };

    this.isGameOver = function () {
        return isGameOver;
    };

    this.getTurnNumb = function () {
        return turnNumb;
    };

    this.drawCells = function () {
        for (var row = 0; row < 3; ++row) {
            for (var line = 0; line < 3; ++line) {
                var cell = new Cell(line + 1, row + 1, cellSize);
                cell.draw();
                this.cells.push(cell);
            }
        }
    };

    this.clickOnBoard = function (mouseX, mouseY) {
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].isCollide(mouseX, mouseY)) {
                if (cells[i].isEmpty) {
                    turnNumb++;
                    cells[i].drawFigure(isTicTurn);
                    isTicTurn = !isTicTurn;

                    if (this.isWin()) {
                        isGameOver = true;
                    }
                }
                return;
            }
        }
    };

    var is3CellsEqual = function (index1, index2, index3) {
        if (!cells[index1].isEmpty && !cells[index2].isEmpty && !cells[index3].isEmpty
            && cells[index1].getFigure() == cells[index2].getFigure() && cells[index1].getFigure() == cells[index3].getFigure()) {
            return true;
        }
    };

    this.isWin = function () {
        for (var i = 0; i < 9; i += 3) {
            if (is3CellsEqual(i, i + 1, i + 2)) return true;
        }

        for (var j = 0; j < 3; j++) {
            if (is3CellsEqual(j, j + 3, j + 6)) return true;
        }

        for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
            if (is3CellsEqual(i, j + i, j + 4)) return true;
        }
    }
};
