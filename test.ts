let num = 0
basic.forever(function () {
    OD01.Number(num, 0, 0, 0)
    num += 1
    OD01.printNumber(num, 1, false)
    OD01.printString("-", 1, false)
    basic.pause(100)
})