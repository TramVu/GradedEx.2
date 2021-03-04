function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    //ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    //ctx5.clearRect(0, 0, canvas.width, canvas.height); 

    ctx2.drawImage(background_lv2, 0, 0, canvas.width, canvas.height);
    
    frogger.draw();
    frogger.update();
    handleObstacle();
    handleScoreBoard();
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    frame ++ ;
    requestAnimationFrame(animate);
}
animate();

//event listeners
window.addEventListener('keydown', function (e){
    keys = e.key;
    if (keys == "ArrowLeft" || keys == "ArrowRight" || keys == "ArrowUp" || keys == "ArrowDown") {
        frogger.jump();
    }
    frogger.moving = false;
}); 

window.addEventListener('keyup', function (e) {
    delete keys[e.key];
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored(){
    score ++ ;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
} 

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Arial';
    ctx4.strokeText('Score', 265, 15);
    ctx4.font = '60px Arial';
    ctx4.fillText(score, 270, 65);
    //ctx4.font = '15px Arial';
    //ctx4.strokeText ('Collisions: ' + collisionsCount, 10, 175); 
    //ctx4.strokeText ('Game Speed: ' + gameSpeed.toFixed(1), 10, 195);
} 

// collision detection between two rectangles
function collision(frogger, carsArray){
    return !(  frogger.x > carsArray.x + carsArray.width || 
                frogger.x + frogger.width < carsArray.x || 
                frogger.y > carsArray.y + carsArray.height|| 
                frogger.y + frogger.height < carsArray.y); 
} 


// reset game when two rectangles collides
function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionsCount ++ ;
    gameSpeed = 1 ;
}