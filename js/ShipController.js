class ShipController{
  constructor(x,y,spriteName,configs){
    this.sprite = Nakama.playerGroup.create(x,y,"assets",spriteName);
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.body.collideWorldBounds = true;
    //keyboard
    this.configs=configs;
    this.timeSinceLastFire = 0;
  }


  update(){
    //di chuyen
    //this.sprite.frameName = 'Spaceship3-sprite.png';
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -Nakama.configs.shipSpeed;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = Nakama.configs.shipSpeed;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
      //this.sprite.frameName = 'Spaceship3Left-sprite.png';
      this.sprite.body.velocity.x = -Nakama.configs.shipSpeed;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      //this.sprite.frameName = 'Spaceship3Right-sprite.png';
      this.sprite.body.velocity.x = Nakama.configs.shipSpeed;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }


    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
    if(
      Nakama.keyboard.isDown(this.configs.fire)
      &&this.timeSinceLastFire>this.configs.cooldown
    ){
      this.fire();
      this.timeSinceLastFire=0;
    }
}
    fire(){
      new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(0,-1));
      new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(0.25,-1));
      new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(-0.25,-1));
      new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(-0.5,-1));
      new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(0.5,-1));
    }
}
