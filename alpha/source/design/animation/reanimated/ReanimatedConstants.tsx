// Module ID: 5223
// Function ID: 5224
// Name: ReanimatedConstants
// Dependencies: [1653, 2]

// Module 5223 (ReanimatedConstants)
import _mod1653 from "module_1653" /* 1653 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: _mod1653.ReduceMotion.Always };
const obj2 = { reduceMotion: undefined };
const merged = Object.assign(obj);
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;
