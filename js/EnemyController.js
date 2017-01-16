class EnemyController {
    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.enemyGroup.create(x,y,"assets",spriteName);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.configs = configs;
        this.timeSinceLastFire = 0;
    }

    update() {

    }

    fire() {
        
        );
    }
}
