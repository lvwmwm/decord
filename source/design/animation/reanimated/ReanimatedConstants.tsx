// Module ID: 4447
// Function ID: 4448
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4185, 2]

// Module 4447 (CONFIG_NEVER_ANIMATE)
import set from "set" /* 2 */;
import _mod4185 from "module_4185" /* 4185 */;

let obj = { duration: 1, reduceMotion: _mod4185.ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = set.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
