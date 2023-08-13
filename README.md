### @explicitHints true
# Code Ninjas Unofficial GBS (Hiding Ninja)




```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"P4(`CNLh^)P:D9Kpa+R5\": {\n        \"data\": \"hwQMABAAAAAADw8AAAAAAADwAAAA8A8AAP//APAPAADwv/0P//8P8P//Ef/////////x/////////9v/////AP//8f////////8R///////wv/0P//8P8AD//wDwDwAAAAAAAADwDwA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ninjaSprite\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"P4(`CNLh^)P:D9Kpa+R5\":\n            case \"ninjaSprite\":return img`\n. . . . f f f f f . . . \n. . . f f f f f f f . . \nf . f f f f f f f f f . \n. f f b f f f f f b f . \nf . f d 1 1 b 1 1 d f . \n. . f f 1 f d f 1 f f . \n. . . f f f f f f f . . \n. . . . f f f f f . . . \n. . . f f f f f f f . . \n. . f f f f f f f f f . \n. . f f f f f f f f f . \n. f . f f f f f f f . f \n. f . f f f f f f f . f \n. . . . f f f f f . . . \n. . . . f f . f f . . . \n. . . f f f . f f f . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"W)t)RD5T*{kylRj-;L]a\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"5bdv9B~8K.:##DQEJ`|g\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"HLjMyi$oA.5AZIiJn#i;\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"$n4#WqCz^D~`PmLUo]tx\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"(uYX/Oj@Oq5d3SRMzGa8\">Enemy</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"W)t)RD5T*{kylRj-;L]a\">mySprite</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`ninjaSprite`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"P4(`CNLh^)P:D9Kpa+R5\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value></block></statement></block></xml>",
  "main.ts": "let mySprite = sprites.create(assets.image`ninjaSprite`, SpriteKind.Player)\n",
  "pxt.json": "{\n    \"name\": \"Ninja Sprite\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}




```






```blocks
namespace SpriteKind {
    export const Hider = SpriteKind.create()
}
info.onScore(10, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hider, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    for (let index = 0; index < 50; index++) {
        mySprite3 = sprites.create(img`
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
        mySprite3.setPosition(randint(0, 160), randint(0, 120))
    }
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 200)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite2 = sprites.create(img`
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
    `, SpriteKind.Hider)
mySprite2.setPosition(randint(0, 160), randint(0, 120))

```


```blockconfig.global



```




## Introduction @showdialog
In this tutorial, you will create your very own video game. A ninja is playing hide and seek, and it's up to you to find him in each round. The game will get harder each time you find the ninja. Follow the instructions, but feel free to be creative and add custom details at the end. Click **Ok** to get started!
![Game Example](https://raw.githubusercontent.com/CalebMamula/cn-ninja-invaders-gbs/master/images./hiding_ninja.gif)
## GBS: Hiding Ninja Step 1
### Making Our Background  




First up, our game needs a background. Open ``||scene:Scene|`` and drag ``||scene:set background color||`` inside the ``||loops:on start||`` container already on the screen.


Click the grey bubble in the ``||scene: set background color||`` block and select a color to use as a background.


Check the Game Window on the right side of the screen to see the selected background color appear!


Click **Next** to go to the next step.



## GBS: Hiding Ninja Step 2
### Add Our Player Sprite

Now we are going to create our main character. Open ``||sprites:Sprites||`` and drag the ``||variables:set [mySprite] to||`` block to the bottom of the ``||loops: on start||`` container.

Click the grey oval and select a sprite of your choice from **Gallery**.

Make sure to change the name of your sprite by clicking on **mySprite** and pressing **Rename variable**. Pick any name for your character, just remember what you chose.


## GBS: Hiding Ninja Step 3
### Code Movement

To move our ninja we need to open ``||controller:Controller||`` and drag ``||controller:move [mySprite] with buttons||`` block to the bottom of the ``||loops:on start||`` container.

We need to tell the game which sprite we want to move. Make sure to change **mySprite** to the name of your Player sprite. This means the arrow keys and WASD can now move the ninja. Try it out!

Did you notice your character can go off screen? To fix this we are going to open ``||sprites:Sprites||`` and drag ``||sprites:set [mySprite] stay in screen |`` to the bottom of our ``||loops:on start||``. Once again, be sure to change **mySprite** to your Player's name.


## GBS: Hiding Ninja Step 4
### Add The Ninja


Now we are going to create our hiding character. Open ``||sprites:Sprites||`` and drag the ``||variables:set [mySprite] to||`` block to the bottom of the ``||loops:on start||`` container.


Click the grey oval and select the ninja picture under **My Assets**. Feel free to change this sprite and make it your own.

Click on **Player** and click **Add a new kind**. Call this **Hider**.

Make sure to change the name of your sprite by clicking on **mySprite** and pressing **Rename variable**. Change the name to Ninja, or something else if you'd like. Just remember what you chose.


## GBS: Hiding Ninja Step 5
### Hiding the Ninja
For a good game of hide and seek, we can't hide in the same place every round. Use a ``||sprites:set [mySprite] position to||`` so we can randomize where the ninja goes. Try and run the game a few times and see what happens. Don't forgot to change **mySprite** to **Ninja**.

Under ``||math:Math||`` grab a ``||math:pick random||`` block and place it into the x oval of our ``||sprites:set  [mySprite] position to ||`` block. Change the 10 to 160. Do the same thing and place a ``||math:pick random||`` inside the y oval. This time we need to change the 10 to 120. Now our ninja will start the each game at a random place on the screen.

 ## GBS: Hiding Ninja Step 6
### Finding the Ninja
Next up, we need to detect when we find the ninja. A ``||sprites:on sprite of kind (Player) overlaps otherSprite of kind (Player)||`` will allow us to do this. This is a new container, so you can place it anywhere in the editor. Change the second **Player** to **Hider**.

Now, whenever our player touches our ninja, the code we place in here will run. For now, just put a ``||sprites:set [mySprite] position to||`` inside the overlap container so we can move the ninja each time it is found. To save time, right click on the ``||sprites:set [mySprite] position to||``  you already have in the ``||loops:on start||`` container and click **Duplicate**.

Try the game out now!


## GBS: Hiding Ninja Step 7
### Spawning The Enemies

The ninja is always out in the open and easy to find, so let's fix that. Now we are going to create our enemies to hide the ninja. Use a ``||variables:set [mySprite] to||`` block from the ``||sprites:Sprites||`` dropdown and place it at the bottom of the overlap container.

Click the grey oval and select a sprite of your choice from **Gallery**.

Be sure to click on **Player** and change it to **Enemy**. This will be needed later. Also be sure to rename the variable from **mySprite** to something else.

We need our enemies to be able to spawn everywhere, so let's set the position just like we did for the ninja. To do this use a ``||sprites:set [mySprite] position to||``. Make sure to change it so we are setting the position of our Enemy sprite.


## GBS: Hiding Ninja Step 7
### Repeat The Enemies, Eat The Enemies

We only have 1 enemy on screen, and we need to change that. Start by going to ``||loops:Loops||`` and grab the ``||loops:repeat [4] times||`` block. Place this above where we set our enemy, then drag the blocks for creating the enemy setting it's position block into here.

The number sets the amount of new enemies that will spawn each round. Start trying it with 30, but you can always increase or decrease it as needed.

To make sure we don't have hundreds of enemies at once, we need to be able to destroy the them. To start, grab another ``||sprites:on sprite of kind (Player) overlaps otherSprite of kind (Player)||`` container. This time we want to change the second **Player** to **Enemy**.

Inside this container add a ``||sprites:destroy (mySprite)||``. Drag an **otherSprite** where it says mySprite. Now click the (+) and pick a fun effect and how long the effect lasts. I recommend disintegrate and 200 ms, but you can pick anything.

## GBS: Hiding Ninja Step 8
### A Way To Win

At the moment, our game goes on forever. We need to program a way to end, and we will use the built in score system to do this. Start by going to ``||loops:Info||`` and getting a ``||info:change score by [1]||`` block. Put this inside the first ``||sprites:overlap||`` container you made, the one that checks if the **Player** and **Hider** sprites touch. Make sure to put this OUTSIDE the ``||loops:repeat||`` block. We want 1 point when we find the ninja, not 30.

Now to check once we find the goal amount. We need a ``||info:on score [100]||`` container, and as with the other containers, you can place this anywhere. Change the 100 to 10, so that the ninja only needs to be found 10 times.

Put a ``||game:game over [WIN]||`` inside this new container. The game will now end when the ninja is found 10 times!

## GBS: Ninja Invasion Step 9
### ``||variables:C||`` ``||controller:u||`` ``||loops:s||`` ``||animation:t||`` ``||logic:o||`` ``||sprites:m||`` ``||music:i||`` ``||math:z||`` ``||scene:e||``
**The tutorial is finished, but now it's time to customize. Here are a few examples of things to try:**

-Use a timer to challenge the user to complete the game in a certain amount of time.


-Customize the 'win' feature. Add a fun message or interesting effect.


-Put a dialog box or splash screen for game instructions.


-Customize the sprites and background to your liking. It's your game! (The fill option in the sprite editor can speed this process up)


-Change the size of the map. Make a bigger tilemap to make finding the ninja even harder!


-Put sound effects in the game for even more fun!


-Add animations. For example, make the player spin or change color as they move around.




*Decide with your Sensei for which customizations you want to make to your game. When you are ready, click **Done**.*


