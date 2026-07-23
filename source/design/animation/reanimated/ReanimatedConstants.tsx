// Module ID: 4132
// Function ID: 34381
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [3991, 2]

// Module 4132 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require("module_3991").ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj["reduceMotion"] = undefined;
const result = require("set").fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
