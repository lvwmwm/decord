// Module ID: 11242
// Function ID: 11243
// Name: GestureConstants
// Dependencies: [5095, 2]

// Module 11242 (GestureConstants)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import size from "module_2" /* 2 */;

let Easing2;
let Easing3;
let out;
const obj = { duration: 200, easing: out(Easing2.poly(4)) };
const Easing = ReanimatedRexport.Easing;
out = Easing.out;
Easing2 = ReanimatedRexport.Easing;
const obj2 = { duration: 200, easing: Easing3.bezier(0, 0, 0.2, 1) };
Easing3 = ReanimatedRexport.Easing;
const result = size.fileFinishedImporting("modules/gesture_handlers/native/GestureConstants.tsx");

export const PULL_GESTURE_ACTIVATION_DISTANCE = 10;
export const PULL_GESTURE_RESISTANCE = 3;
export const FLING_MIN_VELOCITY = 50;
export const FLING_MIN_DISTANCE = 40;
export const PULL_GESTURE_SNAP_TIMING = obj;
export const PULL_GESTURE_UNSNAP_TIMING = obj2;
