var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('https://supercraftd.github.io/phaser-test/');

    this.load.image('sky', 'assets/sky.jpeg');

}

function create ()
{
    this.add.image(0, 0, 'sky');

}

