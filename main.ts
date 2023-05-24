namespace SpriteKind {
    export const duck1 = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
    export const Ninja = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ninja, function (sprite, otherSprite) {
    pause(50)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    ninja.setPosition(randint(0, 160), randint(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 200)
})
let cake: Sprite = null
let ninja: Sprite = null
scene.setBackgroundColor(9)
ninja = sprites.create(img`
    . . . . f f f f f . . . 
    . . . f f f f f f f . . 
    f . f f f f f f f f f . 
    . f f b f f f f f b f . 
    f . f d 1 1 b 1 1 d f . 
    . . f f 1 f d f 1 f f . 
    . . . f f f f f f f . . 
    . . . . f f f f f . . . 
    . . . f f f f f f f . . 
    . . f f f f f f f f f . 
    . . f f f f f f f f f . 
    . f . f f f f f f f . f 
    . f . f f f f f f f . f 
    . . . . f f f f f . . . 
    . . . . f f . f f . . . 
    . . . f f f . f f f . . 
    `, SpriteKind.Ninja)
ninja.setPosition(randint(0, 160), randint(0, 120))
let duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(duck)
duck.setStayInScreen(true)
Custom.nestedContainerWithPause(10, 30, function () {
    cake = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.Enemy)
    cake.setPosition(randint(0, 160), randint(0, 120))
    pauseUntil(() => duck.overlapsWith(ninja))
})
game.gameOver(true)
