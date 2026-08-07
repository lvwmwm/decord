// Module ID: 4304
// Function ID: 4305
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4162, 2]

// Module 4304 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require("module_4162").ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = require("set").fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
