var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 320,
    physics: null,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var ball;

function preload ()
{
    this.load.setBaseURL('https://supercraftd.github.io/phaser-test/');

    this.load.image('ball','assets/ball.png');
}

function create ()
{
    ball = this.add.sprite(50,50,'ball');

}

function update()
{
    if (this.input.keyboard.addKey('D').isDown){
        ball.x += 10;
    }
    if (this.input.keyboard.addKey('A').isDown){
        ball.x -= 10;
    }
    if (this.input.keyboard.addKey('S').isDown){
        ball.y += 10;
    }
    if (this.input.keyboard.addKey('W').isDown){
        ball.y -= 10;
    }

    if (this.input.activePointer.leftButton.isDown){
        ball.x = game.input.mousePointer.x;
        ball.y = game.input.mousePointer.y;
    }

}