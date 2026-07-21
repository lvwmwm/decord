// Module ID: 4128
// Function ID: 34349
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: []

// Module 4128 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require(dependencyMap[0]).ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj["reduceMotion"] = undefined;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;
