'use strict';

var Figure = function(x, y, size, isTac) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isTac = isTac;

    this.draw = function () {
        if (this.isTac) { drawX();
        } else drawO();
    };

    var drawX = function () {
        var Xfirst = {
            moveTo: {
                x: x - size,
                y: y - size
            },
            lineTo: {
                x: x - size,
                y: y - size
            }
        };

        var Xsecond = {
            moveTo: {
                x: x + size,
                y: y - size
            },
            lineTo: {
                x: x + size,
                y: y - size
            }
        };

        function animate() {
            ctx.beginPath();

            ctx.moveTo(Xfirst.moveTo.x, Xfirst.moveTo.y);
            ctx.lineTo(Xfirst.lineTo.x, Xfirst.lineTo.y);
            ctx.stroke();

            Xfirst.lineTo.x += 2;
            Xfirst.lineTo.y += 2;

            var end_of_line = x + size; //adjust this to where you want the line to end
            if (Xfirst.lineTo.x < end_of_line) {
                requestAnimationFrame(function() {
                    animate();
                });
            } else {
                animateSecond()
            }
        }

        function animateSecond() {
            ctx.moveTo(Xsecond.moveTo.x, Xsecond.moveTo.y);
            ctx.lineTo(Xsecond.lineTo.x, Xsecond.lineTo.y);
            ctx.stroke();

            Xsecond.lineTo.x -= 2;
            Xsecond.lineTo.y += 2;

            var end_of_line = x - size;
            if (Xsecond.lineTo.x > end_of_line) {
                requestAnimationFrame(function() {
                    animateSecond();
                });
            }
        }
        animate();
    };

    var drawO = function () {
        var circleDefaults = {
            circlePos: {
                x: x,
                y: y
            },
            radius: size,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 2,
            currentPercent: 0,
            endPercent: 100
        };

        function animateCircle(current) {

            ctx.beginPath();
            ctx.arc(circleDefaults.circlePos.x, circleDefaults.circlePos.y, circleDefaults.radius,
                -(circleDefaults.startAngle), ((circleDefaults.endAngle) * current) - circleDefaults.startAngle);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#000";
            ctx.stroke();
            ctx.closePath();

            circleDefaults.currentPercent += 1;
            if (circleDefaults.currentPercent < circleDefaults.endPercent) {
                requestAnimationFrame(function () {
                    animateCircle(circleDefaults.currentPercent / 20);
                });
            }
        }
        animateCircle();
    };
};
