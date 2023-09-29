//variáveis da tela
var screenHeight = innerHeight;
var screenWidth = innerWidth;
//código
function setup() {
    createCanvas(screenWidth, screenHeight);
  }
function draw() {
//cenário e processos de início
background(50);

//player
drawPlayer();
key_Pressed();
playerStateMachine();
borderCollision();
}