input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.EigthNote)
        basic.pause(100)
        basic.clearScreen()
    }
})
// 1+2+3+4+5+.....+10
// 
// sum=0+1=1
// count 2
// sum=1=2
// count 3 
// sum=3+3
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000000; index++) {
        Counter += 1
        sum = sum + Counter
    }
    basic.showNumber(sum)
})
let sum = 0
let Counter = 0
Counter = 0
sum = 0
basic.showNumber(Counter)
