// Module ID: 4483
// Function ID: 4484
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4218, 2]

// Module 4483 (CONFIG_NEVER_ANIMATE)
import set from "set" /* 2 */;
import _mod4218 from "module_4218" /* 4218 */;

let obj = { duration: 1, reduceMotion: _mod4218.ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = set.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
