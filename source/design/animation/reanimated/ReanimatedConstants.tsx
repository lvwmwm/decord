// Module ID: 4167
// Function ID: 34496
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4026, 2]

// Module 4167 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require("module_4026").ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj["reduceMotion"] = undefined;
const result = require("set").fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
