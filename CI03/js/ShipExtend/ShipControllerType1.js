class ShipControllerType1 extends ShipController {
  constructor(x,y,configs) {
    super(x,y,"Spaceship1-Player.png", configs);
    super.configs={
      up        : Phaser.Keyboard.W,
      down      : Phaser.Keyboard.S,
      left      : Phaser.Keyboard.A,
      right     : Phaser.Keyboard.D,
      fire      : Phaser.Keyboard.T,
      cooldown  : 0.3,
      frameNameDefault: "Spaceship1-Player.png",
      frameNameLeft   : "Spaceship1Left-Player.png",
      frameNameRight  : "Spaceship1Right-Player.png",
    };
  }
}
