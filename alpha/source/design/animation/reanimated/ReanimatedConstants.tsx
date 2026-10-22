// Module ID: 5193
// Function ID: 5194
// Name: ReanimatedConstants
// Dependencies: [5038, 2]

// Module 5193 (ReanimatedConstants)
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: ReanimatedRexport.ReduceMotion.Always };
const obj2 = { reduceMotion: undefined };
const merged = Object.assign(obj);
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;
