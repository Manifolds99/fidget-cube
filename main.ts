input.onButtonPressed(Button.A, function () {
    basic.showString("Rock!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Scissors!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Paper!")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(1 ,5)
basic.showNumber(2, 5)
basic.showNumber(3, 5)
basic.showNumber(4, 5)
basic.showNumber(5, 5)
basic.showNumber(6, 5)
    }
    dice_roll = randint(1, 6)
    if (dice_roll == 1) {
        basic.showNumber(1)
    } else if (dice_roll == 2) {
        basic.showNumber(2)
    } else if (dice_roll == 3) {
        basic.showNumber(3)
    } else if (dice_roll == 4) {
        basic.showNumber(4)
    } else if (dice_roll == 5) {
        basic.showNumber(5)
    } else {
        basic.showNumber(6)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . . # .
            . # # . .
            `)
    }
})
let dice_roll = 0
music.playMelody("E B C5 A B G A F ", 120)
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
basic.showLeds(`
    . . . . .
    . # # # .
    # # . # .
    # # # # .
    . # . # .
    `)
