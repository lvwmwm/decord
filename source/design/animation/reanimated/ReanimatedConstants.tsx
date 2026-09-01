// Module ID: 4480
// Function ID: 4481
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4217, 2]

// Module 4480 (CONFIG_NEVER_ANIMATE)
import set from "set" /* 2 */;
import _mod4217 from "module_4217" /* 4217 */;

let obj = { duration: 1, reduceMotion: _mod4217.ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = set.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
