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

    this.add.sprite(50,50,'ball');

}

function update()
{
    
}