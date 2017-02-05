class ShipControllerType2 extends ShipController {
  constructor(x,y,configs) {
    super(x,y,"Spaceship2-Player.png", configs);
    super.configs={
      up        : Phaser.Keyboard.UP,
      down      : Phaser.Keyboard.DOWN,
      left      : Phaser.Keyboard.LEFT,
      right     : Phaser.Keyboard.RIGHT,
      fire      : Phaser.Keyboard.P,
      cooldown  : 0.3,
      frameNameDefault: "Spaceship2-Player.png",
      frameNameLeft   : "Spaceship2Left-Player.png",
      frameNameRight  : "Spaceship2Right-Player.png",
    };
  }
}
