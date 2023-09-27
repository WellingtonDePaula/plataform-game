//variáveis da tela
var alturaDaTela = innerHeight;
var larguraDaTela = innerWidth;
//código
function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
  }
function draw() {
//cenário e processos de início
background(15);

//player
drawPlayer();
key_Pressed();
playerStateMachine();
}