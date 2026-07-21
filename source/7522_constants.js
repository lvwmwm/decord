// Module ID: 7522
// Function ID: 60215
// Name: constants
// Dependencies: []

// Module 7522 (constants)
const obj = { LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER, LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER };
let num = 1000;
if ("android" === require(dependencyMap[0]).Platform.OS) {
  num = 128;
}
obj.DEFAULT_STEP_RESOLUTION = num;

export const constants = obj;
