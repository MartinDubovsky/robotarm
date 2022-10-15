def on_bluetooth_connected():
    basic.show_icon(IconNames.YES)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.NO)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_mes_dpad_controller_id_microbit_evt():
    global delta, angle
    if control.event_value() == EventBusValue.MES_DPAD_BUTTON_C_DOWN:
        wuKong.set_motor_speed(wuKong.MotorList.M2, 60)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_B_DOWN:
        wuKong.set_motor_speed(wuKong.MotorList.M2, -60)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_DOWN:
        wuKong.set_motor_speed(wuKong.MotorList.M1, -25)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_DOWN:
        wuKong.set_motor_speed(wuKong.MotorList.M1, 25)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_DOWN:
        delta = step
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_DOWN:
        delta = 0 - step
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_UP:
        delta = 0
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_UP:
        delta = 0
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_C_UP or control.event_value() == EventBusValue.MES_DPAD_BUTTON_B_UP:
        wuKong.set_motor_speed(wuKong.MotorList.M2, 0)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_UP or control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_UP:
        wuKong.set_motor_speed(wuKong.MotorList.M1, 0)
    else:
        wuKong.set_motor_speed(wuKong.MotorList.M1, 0)
        wuKong.set_motor_speed(wuKong.MotorList.M2, 0)
    angle = angle + delta
    wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MICROBIT_EVT_ANY,
    on_mes_dpad_controller_id_microbit_evt)

step = 0
delta = 0
angle = 0
angle = 135
delta = 0
step = 2
wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
wuKong.set_motor_speed(wuKong.MotorList.M1, 0)
wuKong.set_motor_speed(wuKong.MotorList.M2, 0)