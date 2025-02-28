function flap() {
    context = c.getContext('2d');
    const santa = new Image();
    santa.src = "https://th.bing.com/th/id/R.f7c53cf05f197c71dd8e55d396add0db?rik=C31CROt57PteMA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f12%2fFlappy-Bird-Transparent-Background.png&ehk=oNugMHtMOR2UQf1O2h9b%2bzRDJGpdKrzexB9AYrf08Bc%3d&risl=&pid=ImgRaw&r=0"
    santaX = 100;
    santaDY = score = bestScore = 0;
    santaSize = 70;
    pipeWidth = topPipeBottomY = 70;
    interval = 19;
    santaY = pipeGap = 200;
    canvasSize = pipeX = 750;
    screenSize = 500;
    c.onclick = () => { santaDY = 8}
    setInterval(() => {
        context.fillStyle = "#b2ebf2";
        context.fillRect(0, 0, canvasSize, canvasSize); //Draw sky
        santaY -= santaDY -= 0.5; //Gravity
        context.drawImage(santa, santaX, santaY, santaSize, santaSize); //Draw santa
        context.fillStyle = "brown";
        pipeX -= 10; //Move pipe
        pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()))
        // reset pipe and random pipe gap
        context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); //Draw top pipe
        context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); //Draw bottom pipe
        context.fillStyle = "brown";
        context.fillText(score++, 10, 15); //Increase and draw score
        bestScore = bestScore < score ? score : bestScore; // New best score
        context.fillText(`Best: ${bestScore}`, 10, 25); // Draw best score
        (((santaY < topPipeBottomY || santaY > topPipeBottomY + pipeGap) && pipeX < santaSize) //santa hit pipe
        || santaY > screenSize) && //santa falls of screen
        ((santaDY = 0), (santaY = 200), (pipeX = canvasSize), (score = 0)); // santa died
    }, interval)
    }