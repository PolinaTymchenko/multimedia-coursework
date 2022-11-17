
window.onload = function () {
    const paper = new Raphael(0, 0, 1300, 600);
    const backGround = paper.rect(0, 0, 1300, 600);

    backGround.attr({ fill: "rgb(53, 51, 59)" });

    function ballOne() {
        const ballOne = paper.circle(200, 200, 50);

        ballOne.attr({ fill: "rgb(212, 115, 225)" });
        colorChangePink(ballOne);

        setTimeout(() => { ballOne.remove() }, 1400);
    }

    function ballTwo() {
        const ballTwo = paper.circle(500, 200, 50);

        ballTwo.attr({ fill: "rgb(168, 75, 231)" });
        colorChangeViolet(ballTwo);

        setTimeout(() => { ballTwo.remove() }, 1400);
    }

    function ballThree() {
        const ballThree = paper.circle(800, 200, 50);

        ballThree.attr({ fill: "rgb(75, 64, 233)" });
        colorChangeBlue(ballThree);

        setTimeout(() => { ballThree.remove() }, 1400);
    }

    function ballFour() {
        const ballFour = paper.circle(1100, 200, 50);

        ballFour.attr({ fill: "rgb(80, 247, 208)" });
        colorChangeAzure(ballFour);

        setTimeout(() => { ballFour.remove() }, 1400);
    }

    function colorChangePink(ball) {
        ball.animate({ fill: 'rgb(237, 161, 203)', stroke: 'rgb(228, 161, 237)', 'stroke-width': 50, 'stroke-opacity': 0.5 }, 1000);
    }

    function colorChangeViolet(ball) {
        ball.animate({ fill: 'rgb(165, 64, 233)', stroke: 'rgb(191, 64, 233)', 'stroke-width': 50, 'stroke-opacity': 0.5 }, 1000);
    }

    function colorChangeBlue(ball) {
        ball.animate({ fill: 'rgb(87, 76, 236)', stroke: 'rgb(80, 107, 247)', 'stroke-width': 50, 'stroke-opacity': 0.5 }, 1000);
    }

    function colorChangeAzure(ball) {
        ball.animate({ fill: 'rgb(124, 247, 218)', stroke: 'rgb(154, 236, 217)', 'stroke-width': 50, 'stroke-opacity': 0.5 }, 1000);
    }

    function allBalls() {
        const ballOne = paper.circle(200, 200, 50);
        const ballTwo = paper.circle(500, 200, 50);
        const ballThree = paper.circle(800, 200, 50);
        const ballFour = paper.circle(1100, 200, 50);

        ballOne.attr({ fill: "rgb(212, 115, 225)" });
        ballTwo.attr({ fill: "rgb(168, 75, 231)" });
        ballThree.attr({ fill: "rgb(75, 64, 233)" });
        ballFour.attr({ fill: "rgb(80, 247, 208)" });
    }

    function ballsAnimation() {
        const ballOne = paper.circle(200, 200, 50);
        const ballTwo = paper.circle(500, 200, 50);
        const ballThree = paper.circle(800, 200, 50);
        const ballFour = paper.circle(1100, 200, 50);

        ballOne.attr({ fill: "rgb(212, 115, 225)" });
        ballTwo.attr({ fill: "rgb(168, 75, 231)" });
        ballThree.attr({ fill: "rgb(75, 64, 233)" });
        ballFour.attr({ fill: "rgb(80, 247, 208)" });

        ballOneDrop1();
        ballTwoDrop1();
        ballThreeDrop1();
        ballFourDrop1();
        setTimeout(() => { ballOneDrop1() }, 1500);
        setTimeout(() => { ballTwoDrop1() }, 1500);
        setTimeout(() => { ballThreeDrop1() }, 1500);
        setTimeout(() => { ballFourDrop1() }, 1500);
        setTimeout(() => { ballOneDrop1() }, 3000);
        setTimeout(() => { ballTwoDrop1() }, 3000);
        setTimeout(() => { ballThreeDrop1() }, 3000);
        setTimeout(() => { ballFourDrop1() }, 3000);
        setTimeout(() => { colorChange() }, 3100);
        setTimeout(() => { colorChange() }, 5100);
        setTimeout(() => { colorChange() }, 7100);
        setTimeout(() => { moveBallsDone() }, 9100);
        setTimeout(() => { moveBallsUp() }, 11100);
        setTimeout(() => { makeSquare() }, 12100);
        setTimeout(() => { runAround() }, 13100);
        setTimeout(() => { colorChange() }, 13100);
        setTimeout(() => { runAround() }, 14100);
        setTimeout(() => { runAround() }, 15100);
        setTimeout(() => { colorChange() }, 15100);
        setTimeout(() => { runAround() }, 16100);
        setTimeout(() => { runAround() }, 17100);
        setTimeout(() => { leaveTheStage() }, 18100);

        function leaveTheStage() {
            setTimeout(() => {
                ballOne.animate({ cy: 200, cx: 1500 }, 500, 'ease-in');
            }, 250);

            setTimeout(() => {
                ballTwo.animate({ cy: 200, cx: 1500 }, 500, 'ease-in');
            }, 750);

            setTimeout(() => {
                ballThree.animate({ cy: 200, cx: 1500 }, 500, 'ease-in');
            }, 1250);

            setTimeout(() => {
                ballFour.animate({ cy: 200, cx: 1500 }, 500, 'ease-in');
            }, 1750);
        }

        function runAround() {
            setTimeout(() => {
                ballOne.animate({ cy: 550, cx: 500 }, 250, 'ease-in');
                ballTwo.animate({ cy: 200, cx: 500 }, 250, 'ease-in');
                ballThree.animate({ cy: 200, cx: 800 }, 250, 'ease-in');
                ballFour.animate({ cy: 550, cx: 800 }, 250, 'ease-in');
            }, 250);

            setTimeout(() => {
                ballFour.animate({ cy: 550, cx: 500 }, 250, 'ease-in');
                ballOne.animate({ cy: 200, cx: 500 }, 250, 'ease-in');
                ballTwo.animate({ cy: 200, cx: 800 }, 250, 'ease-in');
                ballThree.animate({ cy: 550, cx: 800 }, 250, 'ease-in');
            }, 500);

            setTimeout(() => {
                ballThree.animate({ cy: 550, cx: 500 }, 250, 'ease-in');
                ballFour.animate({ cy: 200, cx: 500 }, 250, 'ease-in');
                ballOne.animate({ cy: 200, cx: 800 }, 250, 'ease-in');
                ballTwo.animate({ cy: 550, cx: 800 }, 250, 'ease-in');
            }, 750);

            setTimeout(() => {
                ballTwo.animate({ cy: 550, cx: 500 }, 250, 'ease-in');
                ballThree.animate({ cy: 200, cx: 500 }, 250, 'ease-in');
                ballFour.animate({ cy: 200, cx: 800 }, 250, 'ease-in');
                ballOne.animate({ cy: 550, cx: 800 }, 250, 'ease-in');
            }, 1000);
        }

        function makeSquare() {
            ballOne.animate({ cy: 550, cx: 500 }, 1000, 'ease-in');
            ballTwo.animate({ cy: 200, cx: 500 }, 1000, 'ease-in');
            ballThree.animate({ cy: 200, cx: 800 }, 1000, 'ease-in');
            ballFour.animate({ cy: 550, cx: 800 }, 1000, 'ease-in');
        }

        function moveBallsDone() {
            ballOne.animate({ cy: 550, cx: 200 }, 2000, 'ease-in');
            ballTwo.animate({ cy: 550, cx: 500 }, 2000, 'ease-in');
            ballThree.animate({ cy: 550, cx: 800 }, 2000, 'ease-in');
            ballFour.animate({ cy: 550, cx: 1100 }, 2000, 'ease-in');
        }

        function moveBallsUp() {
            ballOne.animate({ cy: 350, cx: 200 }, 1000, 'ease-in');
            ballTwo.animate({ cy: 350, cx: 500 }, 1000, 'ease-in');
            ballThree.animate({ cy: 350, cx: 800 }, 1000, 'ease-in');
            ballFour.animate({ cy: 350, cx: 1100 }, 1000, 'ease-in');
        }

        function colorChange() {
            setTimeout(() => {
                colorChangePink(ballFour);
                colorChangeViolet(ballOne);
                colorChangeBlue(ballTwo);
                colorChangeAzure(ballThree);
            }, 500);
            setTimeout(() => {
                colorChangePink(ballThree);
                colorChangeViolet(ballFour);
                colorChangeBlue(ballOne);
                colorChangeAzure(ballTwo);
            }, 1000);
            setTimeout(() => {
                colorChangePink(ballTwo);
                colorChangeViolet(ballThree);
                colorChangeBlue(ballFour);
                colorChangeAzure(ballOne);
            }, 1500);
            setTimeout(() => {
                colorChangePink(ballOne);
                colorChangeViolet(ballTwo);
                colorChangeBlue(ballThree);
                colorChangeAzure(ballFour);
            }, 1500);
        }

        // ===================== BALLONE =====================

        function ballOneDrop1() {
            ballOne.animate({ cy: 550, cx: 600 }, 375, 'ease-in', ballOneUp1);
        }

        function ballOneUp1() {
            ballOne.animate({ cy: 200, cx: 1200 }, 375, 'ease-out', ballOneDrop2);
        }

        function ballOneDrop2() {
            ballOne.animate({ cy: 550, cx: 600 }, 375, 'ease-in', ballOneUp2);
        }

        function ballOneUp2() {
            ballOne.animate({ cy: 200, cx: 200 }, 375, 'ease-out');
        }

        // ===================== BALLTWO =====================

        function ballTwoDrop1() {
            ballTwo.animate({ cy: 550, cx: 200 }, 375, 'ease-in', ballTwoUp1);
        }

        function ballTwoUp1() {
            ballTwo.animate({ cy: 200, cx: 500 }, 375, 'ease-out', ballTwoDrop2);
        }

        function ballTwoDrop2() {
            ballTwo.animate({ cy: 550, cx: 800 }, 375, 'ease-in', ballTwoUp2);
        }

        function ballTwoUp2() {
            ballTwo.animate({ cy: 200, cx: 500 }, 375, 'ease-out');
        }

        // ===================== BALLTHREE =====================

        function ballThreeDrop1() {
            ballThree.animate({ cy: 550, cx: 500 }, 375, 'ease-in', ballThreeUp1);
        }

        function ballThreeUp1() {
            ballThree.animate({ cy: 200, cx: 800 }, 375, 'ease-out', ballThreeDrop2);
        }

        function ballThreeDrop2() {
            ballThree.animate({ cy: 550, cx: 1100 }, 375, 'ease-in', ballThreeUp2);
        }

        function ballThreeUp2() {
            ballThree.animate({ cy: 200, cx: 800 }, 375, 'ease-out');
        }

        // ===================== BALLFOUR =====================

        function ballFourDrop1() {
            ballFour.animate({ cy: 550, cx: 600 }, 375, 'ease-in', ballFourUp1);
        }

        function ballFourUp1() {
            ballFour.animate({ cy: 200, cx: 200 }, 375, 'ease-out', ballFourDrop2);
        }

        function ballFourDrop2() {
            ballFour.animate({ cy: 550, cx: 600 }, 375, 'ease-in', ballFourUp2);
        }

        function ballFourUp2() {
            ballFour.animate({ cy: 200, cx: 1100 }, 375, 'ease-out');
        }

    }

    ballOne();
    setTimeout(() => { ballTwo() }, 1400);
    setTimeout(() => { ballThree() }, 2800);
    setTimeout(() => { ballFour() }, 4200);
    setTimeout(() => { ballOne() }, 5900);
    setTimeout(() => { ballTwo() }, 7300);
    setTimeout(() => { ballThree() }, 8700);
    setTimeout(() => { ballFour() }, 10100);
    setTimeout(() => { allBalls() }, 11800);
    setTimeout(() => { paper.clear() }, 12300);
    setTimeout(() => {
        const backGround = paper.rect(0, 0, 1300, 600);
        backGround.attr({ fill: "rgb(53, 51, 59)" });
    }, 12800);

    setTimeout(() => { ballsAnimation() }, 13300);
};