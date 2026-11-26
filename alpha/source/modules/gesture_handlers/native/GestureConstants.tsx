// Module ID: 11806
// Function ID: 11807
// Name: GestureConstants
// Dependencies: [1654, 2]

// Module 11806 (GestureConstants)
import _mod1654 from "module_1654" /* 1654 */;
import size from "module_2" /* 2 */;

let Easing2;
let Easing3;
let out;
const obj = { duration: 200, easing: out(Easing2.poly(4)) };
const Easing = _mod1654.Easing;
out = Easing.out;
Easing2 = _mod1654.Easing;
const obj2 = { duration: 200, easing: Easing3.bezier(0, 0, 0.2, 1) };
Easing3 = _mod1654.Easing;
const result = size.fileFinishedImporting("modules/gesture_handlers/native/GestureConstants.tsx");

export const PULL_GESTURE_ACTIVATION_DISTANCE = 10;
export const PULL_GESTURE_RESISTANCE = 3;
export const FLING_MIN_VELOCITY = 50;
export const FLING_MIN_DISTANCE = 40;
export const PULL_GESTURE_SNAP_TIMING = obj;
export const PULL_GESTURE_UNSNAP_TIMING = obj2;
