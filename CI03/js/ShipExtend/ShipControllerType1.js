class ShipControllerType1 extends ShipController {
  constructor(x,y,configs) {
    configs.cooldown = 0.3;
    configs.health = 5;
    configs.frameNameDefault= "Spaceship1-Player.png";
    configs.frameNameLeft   = "Spaceship1Left-Player.png";
    configs.frameNameRight  = "Spaceship1Right-Player.png";
    super(x,y,"Spaceship1-Player.png", configs);
  }

  fire(){
    //if(!this.sprite.alive) return;

    this.createBullet(new Phaser.Point(0, -1));
    //this.createBullet(new Phaser.Point(-1, -10));

  }



  createBullet(direction){
    new PlayerBulletType1Controller(
      this.sprite.position,
      direction
    );
  }
}
