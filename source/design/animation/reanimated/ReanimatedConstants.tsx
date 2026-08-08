// Module ID: 4305
// Function ID: 4306
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4036, 2]

// Module 4305 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require("module_4036").ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = require("set").fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
