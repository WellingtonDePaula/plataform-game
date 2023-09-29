var right = 0;
var left = 0;
var keyPressed = right + left;

let player = {
    x: screenWidth/2,
    y: screenHeight/2,
    state: "idle",

    velh: 0,
    max_velh: 5,

    velv: 0,
    max_velv: 5,

    width: 30,
    height: 30,
};

function drawPlayer(){
    rect(player.x, player.y, player.width, player.height);
}

function key_Pressed(){

    if(keyIsDown(RIGHT_ARROW)){
        right = 1;
    } else {
        right = 0;
    }

    if(keyIsDown(LEFT_ARROW)){
        left = -1;
    } else {
        left = 0;
    }

    keyPressed = right + left;
    player.velh = player.max_velh * keyPressed;

}

function playerStateMachine(){
    switch(player.state) {
        case "idle":
            {
                if(player.velh && keyPressed != 0){
                    player.state = "moving";
                }
                player.velh = 0;
                break;
            }
        case "moving":
            {
                player.x += player.velh;
                if(player.velh === 0){
                    player.state = "idle";
                }
                break;
            }
    }
}

/////////////////////////////////////////////
//Collisions:

function borderCollision() {


    console.log(keyPressed, player.velh, player.state)
    if(player.x + player.width >= screenWidth) {
        player.state = "idle";
    }
    
    if(player.x <= 0){
        player.state = "idle";
    }
}