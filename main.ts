let X = 0
let Y = 0
let list: number[] = []
let n = 0
let 亮燈數 = 0
let a = 0
function 燈數 (num: number) {
    if (num % 5 == 0) {
        X = 4
        Y = Math.floor(num / 5) - 1
    } else {
        X = num % 5 - 1
        Y = Math.floor(num / 5)
    }
    led.plot(X, Y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < 亮燈數) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    亮燈數 += 1
})
basic.forever(function () {
	
})
