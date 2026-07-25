// Module ID: 4133
// Function ID: 34393
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [3992, 2]

// Module 4133 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require("module_3992").ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj["reduceMotion"] = undefined;
const result = require("set").fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
