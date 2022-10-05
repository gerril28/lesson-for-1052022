input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.EigthNote)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 9; index++) {
        Counter += 1
        basic.showNumber(Counter)
    }
})
let Counter = 0
Counter = 0
basic.showNumber(Counter)
