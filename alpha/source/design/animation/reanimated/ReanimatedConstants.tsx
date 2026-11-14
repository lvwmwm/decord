// Module ID: 5549
// Function ID: 5550
// Name: ReanimatedConstants
// Dependencies: [1655, 2]

// Module 5549 (ReanimatedConstants)
import _mod1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: _mod1655.ReduceMotion.Always };
const obj2 = { reduceMotion: undefined };
const merged = Object.assign(obj);
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;
