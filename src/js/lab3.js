import Raphael from '../js/raphael.min';

window.onload = function () {
    var paper = new Raphael(0, 0, 1300, 600);
    var backGround = paper.rect(0, 0, 1300, 600);
    var ball = paper.circle(50, 50, 50);

    backGround.attr({ fill: "rgb(53, 51, 59)" });
    ball.attr({ fill: "rgb(192, 192, 248)" });

    function bounce_drop1() {
        ball.animate({ cy: 550, cx: 600 }, 400, 'ease-in', bounce_up1);
    }

    function bounce_up1() {
        ball.animate({ cy: 50, cx: 1200 }, 600, 'ease-out', bounce_drop2);
    }

    function bounce_drop2() {
        ball.animate({ cy: 550, cx: 600 }, 400, 'ease-in', bounce_up2);
    }

    function bounce_up2() {
        ball.animate({ cy: 50, cx: 170 }, 600, 'ease-out', bounce_drop1);
    }

    bounce_drop1();
};