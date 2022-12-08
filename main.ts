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
    list = 0
    for (let index = 0; index < 25; index++) {
        list.push(q)
    }
    n = 0
    while (n < 3) {
        a = randint(0, 24)
    }
})
let a = 0
let n = 0
let list = 0
let Y = 0
let X = 0
let q = 0
q = 0
basic.forever(function () {
	
})
