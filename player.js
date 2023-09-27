var right = 0;
var left = 0;
var keyPressed = right + left;

var player = {
    x: larguraDaTela/2,
    y: alturaDaTela/2,
    state: "idle",

    velh: 0,
    max_velh: 5,

    velv: 0,
    max_velv: 5,

    largura: 30,
    altura: 30,
};

function drawPlayer(){
    rect(player.x, player.y, player.largura, player.altura);
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
                player.velh = 0;
                if(keyPressed != 0){
                    player.state = "moving";
                }
                break;
            }
        case "moving":
            {
                player.x += player.velh;
                break;
            }
    }
}