// Module ID: 4847
// Function ID: 4848
// Name: ReanimatedConstants
// Dependencies: [4595, 2]

// Module 4847 (ReanimatedConstants)
import ReanimatedRexport from "ReanimatedRexport" /* 4595 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: ReanimatedRexport.ReduceMotion.Always };
const obj2 = {};
const merged = Object.assign(obj);
obj2.reduceMotion = undefined;
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;
