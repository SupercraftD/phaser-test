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
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = "#eee";

    game.load.setBaseURL('https://supercraftd.github.io/phaser-test/');

    game.load.image('ball','assets/ball.png');
}

function create ()
{
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(50,50,'sky');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.velocity.set(150, 150);


}

function update()
{

}