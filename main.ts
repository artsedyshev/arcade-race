namespace SpriteKind {
    export const п = SpriteKind.create()
    export const п2 = SpriteKind.create()
    export const яма = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 4 2 . . . . . . 2 4 2 . . 
        . 4 4 4 4 4 . . . . 4 4 4 4 4 . 
        . 5 4 5 4 5 . . . . 5 4 5 4 5 . 
        5 4 . 5 . 4 5 . . 5 4 . 5 . 4 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, тачка, 2, -100)
})
sprites.onCreated(SpriteKind.п, function (sprite) {
    sprite.setVelocity(0, 100)
    sprite.y = 0
    sprite.z = -1000
    sprite.setFlag(SpriteFlag.DestroyOnWall, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.яма, function (sprite, otherSprite) {
    тачка.destroy(effects.disintegrate, 500)
    music.smallCrash.play()
    pause(1000)
    game.over(false, effects.dissolve)
})
let разметка: Sprite = null
let mySprite: Sprite = null
let projectile: Sprite = null
let тачка: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
тачка = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 d d d d 5 . . . . . 
    . . . . d 3 3 3 3 3 3 d . . . . 
    . . 5 . d 3 3 3 3 3 3 d . 5 . . 
    . . 5 . d 3 3 3 3 3 3 d . 5 . . 
    . . 5 . . 3 9 9 9 9 3 . . 5 . . 
    . . 5 5 . 3 1 9 9 9 3 . 5 5 . . 
    . . . 5 5 3 3 4 4 3 3 5 5 . . . 
    . . . . d 3 4 4 4 4 3 d . . . . 
    . . . . d 7 e e e e 7 d . . . . 
    . . . . d 3 4 4 4 4 3 d . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(тачка, 50, 10)
тачка.y = 100
тачка.setStayInScreen(true)
tiles.setTilemap(tilemap`уровень1`)
game.onUpdateInterval(1013, function () {
    mySprite = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.яма)
    mySprite.x = 48 + 16 * randint(0, 4)
    mySprite.y = 0
    mySprite.z = -100
    mySprite.vy = 100
    mySprite.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(350, function () {
    разметка = sprites.create(img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `, SpriteKind.п)
    разметка.x = 64
    разметка = sprites.create(img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `, SpriteKind.п)
    разметка.x = 96
})
game.onUpdateInterval(500, function () {
	
})
