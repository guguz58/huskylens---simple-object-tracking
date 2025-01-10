huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.readeBox(1, Content1.xCenter) < 140) {
            if (huskylens.readeBox(1, Content1.yCenter) < 100) {
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (huskylens.readeBox(1, Content1.yCenter) > 140) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    `)
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        } else if (huskylens.readeBox(1, Content1.xCenter) > 180) {
            if (huskylens.readeBox(1, Content1.yCenter) < 100) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (huskylens.readeBox(1, Content1.yCenter) > 140) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . #
                    `)
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . #
                    . . . . .
                    . . . . .
                    `)
            }
        } else {
            if (huskylens.readeBox(1, Content1.yCenter) < 100) {
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (huskylens.readeBox(1, Content1.yCenter) > 140) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `)
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
