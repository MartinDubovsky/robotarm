bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        pins.servoSetPulse(AnalogPin.P0, left)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        pins.servoSetPulse(AnalogPin.P0, right)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        pins.servoSetPulse(AnalogPin.P0, center)
    } else {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    }
})
let right = 0
let left = 0
let center = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
center = 1540
left = 1040
right = 2040
let delta = 0
let step = 10
pins.servoSetPulse(AnalogPin.P0, center)
wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
basic.forever(function () {
	
})
