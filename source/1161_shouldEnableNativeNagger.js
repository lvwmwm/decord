// Module ID: 1161
// Function ID: 13200
// Name: shouldEnableNativeNagger
// Dependencies: []
// Exports: shouldEnableNativeNagger

// Module 1161 (shouldEnableNativeNagger)
const Platform = require(dependencyMap[0]).Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if ("boolean" !== typeof enableNativeNagger) {
    tmp = !require(dependencyMap[1]).isExpoGo();
    const obj = require(dependencyMap[1]);
  }
  return tmp;
};
