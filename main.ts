radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
    	
    } else if (receivedString == "B") {
    	
    } else if (receivedString == "C") {
    	
    } else if (receivedString == "D") {
    	
    } else if (receivedString == "E") {
    	
    } else if (receivedString == "F") {
    	
    } else if (receivedString == "a") {
        robotbit.MotorRun(robotbit.Motors.M2A, s22)
        robotbit.MotorRun(robotbit.Motors.M1B, s42)
    } else if (receivedString == "b") {
        robotbit.MotorRun(robotbit.Motors.M2A, s32)
        robotbit.MotorRun(robotbit.Motors.M1B, s42)
    } else if (receivedString == "c") {
        robotbit.MotorRun(robotbit.Motors.M2A, s42)
        robotbit.MotorRun(robotbit.Motors.M1B, s42)
    } else if (receivedString == "d") {
        robotbit.MotorRun(robotbit.Motors.M2A, s42)
        robotbit.MotorRun(robotbit.Motors.M1B, s32)
    } else if (receivedString == "e") {
        robotbit.MotorRun(robotbit.Motors.M2A, s42)
        robotbit.MotorRun(robotbit.Motors.M1B, s22)
    } else if (receivedString == "f") {
        robotbit.MotorRun(robotbit.Motors.M2A, s12)
        robotbit.MotorRun(robotbit.Motors.M1B, s32)
    } else if (receivedString == "g") {
        robotbit.MotorRun(robotbit.Motors.M2A, s12)
        robotbit.MotorRun(robotbit.Motors.M1B, s22)
    } else if (receivedString == "h") {
        robotbit.MotorRun(robotbit.Motors.M2A, s22)
        robotbit.MotorRun(robotbit.Motors.M1B, s22)
    } else if (receivedString == "i") {
        robotbit.MotorRun(robotbit.Motors.M2A, s22)
        robotbit.MotorRun(robotbit.Motors.M1B, s12)
    } else if (receivedString == "j") {
        robotbit.MotorRun(robotbit.Motors.M2A, s32)
        robotbit.MotorRun(robotbit.Motors.M1B, s12)
    } else if (receivedString == "k") {
        robotbit.MotorRun(robotbit.Motors.M2A, s0)
        robotbit.MotorRun(robotbit.Motors.M1B, s22)
    } else if (receivedString == "l") {
        robotbit.MotorRun(robotbit.Motors.M2A, s0)
        robotbit.MotorRun(robotbit.Motors.M1B, s12)
    } else if (receivedString == "m") {
        robotbit.MotorRun(robotbit.Motors.M2A, s0)
        robotbit.MotorRun(robotbit.Motors.M1B, s0)
    } else if (receivedString == "n") {
        robotbit.MotorRun(robotbit.Motors.M2A, s12)
        robotbit.MotorRun(robotbit.Motors.M1B, s0)
    } else if (receivedString == "o") {
        robotbit.MotorRun(robotbit.Motors.M2A, s22)
        robotbit.MotorRun(robotbit.Motors.M1B, s0)
    } else if (receivedString == "p") {
        robotbit.MotorRun(robotbit.Motors.M2A, s1)
        robotbit.MotorRun(robotbit.Motors.M1B, s3)
    } else if (receivedString == "q") {
        robotbit.MotorRun(robotbit.Motors.M2A, s1)
        robotbit.MotorRun(robotbit.Motors.M1B, s2)
    } else if (receivedString == "r") {
        robotbit.MotorRun(robotbit.Motors.M2A, s2)
        robotbit.MotorRun(robotbit.Motors.M1B, s2)
    } else if (receivedString == "s") {
        robotbit.MotorRun(robotbit.Motors.M2A, s2)
        robotbit.MotorRun(robotbit.Motors.M1B, s1)
    } else if (receivedString == "t") {
        robotbit.MotorRun(robotbit.Motors.M2A, s3)
        robotbit.MotorRun(robotbit.Motors.M1B, s1)
    } else if (receivedString == "u") {
        robotbit.MotorRun(robotbit.Motors.M2A, s2)
        robotbit.MotorRun(robotbit.Motors.M1B, s4)
    } else if (receivedString == "v") {
        robotbit.MotorRun(robotbit.Motors.M2A, s3)
        robotbit.MotorRun(robotbit.Motors.M1B, s4)
    } else if (receivedString == "w") {
        robotbit.MotorRun(robotbit.Motors.M2A, s4)
        robotbit.MotorRun(robotbit.Motors.M1B, s4)
    } else if (receivedString == "x") {
        robotbit.MotorRun(robotbit.Motors.M2A, s4)
        robotbit.MotorRun(robotbit.Motors.M1B, s3)
    } else if (receivedString == "y") {
        robotbit.MotorRun(robotbit.Motors.M2A, s4)
        robotbit.MotorRun(robotbit.Motors.M1B, s2)
    } else {
        robotbit.MotorRun(robotbit.Motors.M1B, 0)
        robotbit.MotorRun(robotbit.Motors.M2A, 0)
    }
})
let s0 = 0
let s42 = 0
let s4 = 0
let s32 = 0
let s3 = 0
let s22 = 0
let s2 = 0
let s12 = 0
let s1 = 0
radio.setGroup(1)
robotbit.MotorRunDual(
robotbit.Motors.M1B,
0,
robotbit.Motors.M2A,
0
)
s1 = 0 - s12
s2 = 0 - s22
s3 = 0 - s32
s4 = 0 - s42
s0 = 0
s12 = 100
s22 = 150
s32 = 200
s42 = 255
basic.forever(function () {
	
})
