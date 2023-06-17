//% weight=12 color=#20bf6b icon="\uf0ae"
namespace Custom {
    //% block="set $sprite=variables_get(mySprite) to random position"
    //% draggableParameters="reporter"
    //% draggableParametersNames=""
    //% draggableParametersTypes=""
    //% handlerStatement=true
    //% blockNamespace="sprites"
    //% category="Sprites"
    export function randomPosition(sprite: Sprite) {
        sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()));
    }
}
