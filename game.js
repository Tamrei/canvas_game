'use strict';

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

var mouseX, mouseY;

canvas.addEventListener("mouseup", mouseUp, false);

var board = new Board(60);
board.drawCells();
var cells = board.cells;

var turnInfo = document.getElementById("turnInfo");
turnInfo.innerHTML = "Tic turn";

var winInfo = document.getElementById("winInfo");

function mouseUp(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;

    if (board.isGameOver() || board.getTurnNumb > 8) {
        location.reload();
    }

    if (board.isTicTurn()) {
        turnInfo.innerHTML = "Tic turn";
    } else {
        turnInfo.innerHTML = "Tac turn";
    }

    board.clickOnBoard(mouseX, mouseY);

    if (board.isGameOver()) {
        if (board.isTicTurn()) {
            winInfo.innerHTML = "Tic wins";
        } else winInfo.innerHTML = "Tac wins";
    }
}
