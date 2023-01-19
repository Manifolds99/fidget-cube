input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    dice_roll = randint(1, 6)
    if (dice_roll == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (dice_roll == 2) {
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    } else if (dice_roll == 3) {
        basic.showLeds(`
            . # # . .
            . . . # .
            . # # . .
            . . . # .
            . # # . .
            `)
    } else if (dice_roll == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # #
            . . . # .
            . . . # .
            `)
    } else if (dice_roll == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . . . # .
            . # # . .
            `)
    } else {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # # . .
            . # . # .
            . . # . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let dice_roll = 0
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # .
        # # # # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . # . #
        . . . . #
        # . # . #
        `)
}
