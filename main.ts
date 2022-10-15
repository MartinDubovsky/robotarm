bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 60)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -60)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -25)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 25)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        delta = step
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        delta = 0 - step
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        delta = 0
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        delta = 0
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
    } else {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    }
})
let step = 0
let delta = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
let angle = 1500
delta = 0
step = 10
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
basic.forever(function () {
    angle = angle + delta
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
    pins.servoSetPulse(AnalogPin.P0, angle)
})
