//% weight=100 color=#ff7f50 icon="\uf0ae"
namespace Custom {
    //% block="repeat $numberOfRounds times for $enemiesPerRound enemies each round"
    //% draggableParameters="reporter"
    //% draggableParametersNames=""
    //% draggableParametersTypes=""
    //% handlerStatement=true
    //% blockNamespace="loops"
    //% category="Loops"
    export function nestedContainerWithPause(numberOfRounds: number, enemiesPerRound: number, handler: () => void) {
        for (let i = 0; i < numberOfRounds; i++) {
            for (let j = 0; j < enemiesPerRound; j++) {
                handler();
            }
            if (i < numberOfRounds - 1) {
                pause(100); // Adjust the pause duration as needed
            }
        }
    }
}
