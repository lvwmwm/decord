// Module ID: 11430
// Function ID: 11431
// Name: GestureConstants
// Dependencies: [1652, 2]

// Module 11430 (GestureConstants)
import _mod1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let Easing2;
let Easing3;
let out;
const obj = { duration: 200, easing: out(Easing2.poly(4)) };
const Easing = _mod1652.Easing;
out = Easing.out;
Easing2 = _mod1652.Easing;
const obj2 = { duration: 200, easing: Easing3.bezier(0, 0, 0.2, 1) };
Easing3 = _mod1652.Easing;
const result = size.fileFinishedImporting("modules/gesture_handlers/native/GestureConstants.tsx");

export const PULL_GESTURE_ACTIVATION_DISTANCE = 10;
export const PULL_GESTURE_RESISTANCE = 3;
export const FLING_MIN_VELOCITY = 50;
export const FLING_MIN_DISTANCE = 40;
export const PULL_GESTURE_SNAP_TIMING = obj;
export const PULL_GESTURE_UNSNAP_TIMING = obj2;
