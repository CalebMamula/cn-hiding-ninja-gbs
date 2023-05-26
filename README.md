### @explicitHints true
# Code Ninjas Unofficial GBS (Hiding Ninja)




```assetjsond
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"P4(`CNLh^)P:D9Kpa+R5\": {\n        \"data\": \"hwQMABAAAAAADw8AAAAAAADwAAAA8A8AAP//APAPAADwv/0P//8P8P//Ef/////////x/////////9v/////AP//8f////////8R///////wv/0P//8P8AD//wDwDwAAAAAAAADwDwA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ninjaSprite\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"P4(`CNLh^)P:D9Kpa+R5\":\n            case \"ninjaSprite\":return img`\n. . . . f f f f f . . . \n. . . f f f f f f f . . \nf . f f f f f f f f f . \n. f f b f f f f f b f . \nf . f d 1 1 b 1 1 d f . \n. . f f 1 f d f 1 f f . \n. . . f f f f f f f . . \n. . . . f f f f f . . . \n. . . f f f f f f f . . \n. . f f f f f f f f f . \n. . f f f f f f f f f . \n. f . f f f f f f f . f \n. f . f f f f f f f . f \n. . . . f f f f f . . . \n. . . . f f . f f . . . \n. . . f f f . f f f . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"W)t)RD5T*{kylRj-;L]a\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"5bdv9B~8K.:##DQEJ`|g\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"HLjMyi$oA.5AZIiJn#i;\">Object</variable><variable type=\"KIND_SpriteKind\" id=\"$n4#WqCz^D~`PmLUo]tx\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"(uYX/Oj@Oq5d3SRMzGa8\">Enemy</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"W)t)RD5T*{kylRj-;L]a\">mySprite</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`ninjaSprite`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"P4(`CNLh^)P:D9Kpa+R5\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value></block></statement></block></xml>",
  "main.ts": "let mySprite = sprites.create(assets.image`ninjaSprite`, SpriteKind.Player)\n",
  "pxt.json": "{\n    \"name\": \"Ninja Sprite\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}




```






```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ninja, function (sprite, otherSprite) {
    pause(50)
    ninja.setPosition()
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
ninja.setPosition()
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
    cake.setPosition()
    pauseUntil(() => duck.overlapsWith(ninja))
})
game.gameOver(true)
namespace SpriteKind {
    export const Ninja = SpriteKind.create()
}
pauseUntil(() => mySprite.overlapsWith(otherSprite))

```


```blockconfig.global
pause(50)
let mySprite: Sprite = null
mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
pauseUntil(() => mySprite.overlapsWith(otherSprite))


```


```customts


```




## Introduction @showdialog
In this tutorial, you will create your very own video game. A ninja is playing hide and seek, and it's up to you to find him in each round. The game will get harder each time you find the ninja. Follow the instructions, but feel free to be creative and add custom details. Click Ok to get started!
![Game Example](https://raw.githubusercontent.com/CalebMamula/cn-ninja-invaders-gbs/master/images./hiding_ninja.gif)
## GBS: Hiding Ninja Step 1
### Making Our Background  




First up, our game needs a background. Grab a ``||scene:set background color||`` block from the ``||scene:Scene|`` dropdown and place it inside our ``||loops:on start||`` container already on the screen.




Click the grey bubble in the ``||scene: set background color||`` block and select a color to use as a background.




Chcek the Game Window on the right side of the screen to see the selected background color appear!




Click **Next** to go to the next step.




## GBS: Hiding Ninja Step 2
### Add Our Player Sprite




Now we are going to create our main character. Use a ``||variables:set [mySprite] to||`` block from the ``||sprites:Sprites||`` dropdown and place it at the bottom of the ``||loops: on start||`` container.




Click the grey oval and select a sprite of your choice from **Gallery**.




Make sure to change the name of your sprite by clicking on **mySprite** and pressing **Rename variable**. Pick any name for your character, just remember what you chose.


## GBS: Hiding Ninja Step 3
### Code Movement




To move our ninja we need to use a ``||controller:move [mySprite] with buttons||`` block. Place this at the bottom of the ``||loops:on start||`` container.




We need to tell the game which sprite we want to move. Make sure to change **mySprite** to the player name you picked. This means the arrow keys and WASD can now move the ninja. Try it out!




Did you notice your character can go off screen? To fix this we are going to use ``||sprites:set (mySprite) stay in screen ||``. Once again, be sure to change **mySprite** to your player sprite's name.


## GBS: Hiding Ninja Step 4
### Add The Ninja


Now we are going to create our hiding character. Use a ``||variables:set [mySprite] to||`` block from the ``||sprites:Sprites||`` dropdown and place it at the bottom of the ``||loops: on start||`` container.


Click the grey oval and select the ninja picture under **My Assets**. Feel free to change this sprite and make it your own.

Click on **Player** and click add a new kind. Call this **Hider**.

Make sure to change the name of your sprite by clicking on mySprite and pressing Rename variable. Change the name to Ninja, or something else if you'd like. Just remember what you chose.


## GBS: Hiding Ninja Step 5
### Basic Hide And Seek
For a good game of hide and seek, we can't hide in the same place every round. Use a ``||sprites:set (mySprite) position to||`` to randomize where the ninja goes. Try and run the game a few times and see what happens. Don't forgot to change **mySprite** to **Ninja**.

Next up, we need to detect when we find the ninja. A ``||sprites:on sprite of kind (Player) overlaps otherSprite of kind (Player)||`` will allow us to do this. This is a new container, so you can place it anywhere in the editor. Change the second **Player** to **Hider**.

Now, whenever our player touches our ninja the code we place in here will run. For now, just put a ``||sprites:set [mySprite] position to||`` inside the overlap container so we can move the ninja each time it is found.

Try it out!


## GBS: Hiding Ninja Step 6
### Spawning The Enemies

The ninja is always out in the open and easy to find, so let's fix that. Now we are going to create our enemies to hide the ninja. Use a ``||variables:set [mySprite] to||`` block from the ``||sprites:Sprites||`` dropdown and place it at the bottom of your code.

Click the grey oval and select a sprite of your choice from **Gallery**.

Be sure to click on Player and change it to Enemy. This will be needed later.

We need our enemies to be able to spawn everywhere, so let's set the position just like we did for the ninja. To do this use a ``||sprites:set (mySprite) position to||``. Make sure to change it so we are setting the position of our enemy Sprite.


## GBS: Hiding Ninja Step 7
### Repeat Repeating Rounds

We only have 1 enemy on screen, and we need to change that. Start by going to ``||loops:Loops||`` and grab the ``||loops:repeat [0] times for [0] enemies each round||`` block. Place this above where we set our enemy, then drag 

The first number sets the amount of times our code will run. Set this to 10 for now.

The second number sets the amount of enemies that will spawn each round. Set it to 30, but you can change this later.

## GBS: Hiding Ninja Step 8
### Fixing Repeat Repeating Rounds

All of our enemies are spawning right when the game starts. We need to spread this out so the repeats only happen after finding the ninja.

To seperate out when the code runs we will use the ``||loops:pause until <true>||``. Put this at the bottom of our repeat block. Now we need to go to ``||sprites:Sprites||`` and get the small ``||sprites:(mySprite) overlaps with (otherSprite)||``. Drag this so the red dot is on the ``||logic:<true>||``. Change mySprite to the name of your player and otherSprite to Ninja.

Next we need a ``||loops:pause (50) ms||`` block placed **BEFORE** the ``||sprites:set (mySprite) position to||`` inside our ``||sprites:on sprite of kind (Player) overlaps otherSprite of kind (Player)||`` container from earlier. This will allow the ninja to move when found AND the enemies to spawn as intended. 

## GBS: Hiding Ninja Step 9
### Eat And End

To make this game more fun, we need to be able to destroy the enemies. To start, grab another ``||sprites:on sprite of kind (Player) overlaps otherSprite of kind (Player)||`` container. This time we want to change the second **Player** to **Enemy**.

Inside this container add a ``||sprites:destroy (mySprite)||``. Click the (+) and pick a fun effect. I recommend disintegrate and 200 ms, but you can pick anything.

Now, the main game is complete! Let's finish it off by placing a ``||game:game over||`` block at the very end of the code, right below the repeat block.

Try it out! When you are ready, go to the next step.

## GBS: Ninja Invasion Step 10
### ``||variables:C||`` ``||controller:u||`` ``||loops:s||`` ``||animation:t||`` ``||logic:o||`` ``||sprites:m||`` ``||music:i||`` ``||math:z||`` ``||scene:e||``
**The tutorial is finished, but now it's time to customize. Here are a few examples of things to try:**



-Customize the 'win' feature. Add a fun message or interesting effect.


-Put a dialog box or splash screen for game instructions.


-Customize the sprites and background to your liking. It's your game! (The fill option in the sprite editor can speed this process up)


-Change the size of the map. Make a bigger tilemap to make finding the ninja even harder!


-Put sound effects in the game for even more fun!


-Allow a way to get a best score. Maybe you could add a timer?


-Add animations. For example, make the projectiles spin or change color as they fly.




*Decide with your Sensei for which customizations you want to make to your game. When you are ready, click **Done**.*


