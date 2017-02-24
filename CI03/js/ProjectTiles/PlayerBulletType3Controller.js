class PlayerBulletType3Controller extends BulletController{
  constructor(position, direction){
    super(
      position,
      "BulletType3.png",
      direction,
      Nakama.playerBulletGroup
    );
  }
}
