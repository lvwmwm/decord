// Module ID: 4839
// Function ID: 4840
// Name: ReanimatedConstants
// Dependencies: [4570, 2]

// Module 4839 (ReanimatedConstants)
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: ReanimatedRexport.ReduceMotion.Always };
const obj2 = { reduceMotion: undefined };
const merged = Object.assign(obj);
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;
