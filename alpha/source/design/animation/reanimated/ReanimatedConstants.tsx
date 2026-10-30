// Module ID: 5250
// Function ID: 5251
// Name: ReanimatedConstants
// Dependencies: [5090, 2]

// Module 5250 (ReanimatedConstants)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: ReanimatedRexport.ReduceMotion.Always };
const obj2 = { reduceMotion: undefined };
const merged = Object.assign(obj);
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;
