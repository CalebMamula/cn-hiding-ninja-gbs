//% weight=100 color=#4b7bec icon="\uf0ae"
namespace Custom {
    //% block="set $sprite=variables_get(mySprite) to random position"
    //% draggableParameters="reporter"
    //% draggableParametersNames=""
    //% draggableParametersTypes=""
    //% handlerStatement=true
    //% blockNamespace="sprites"
    //% category="Sprites"
    export function nestedContainerWithPause(numberOfRounds: number, enemiesPerRound: number, handler: () => void) {
       Ninja.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
