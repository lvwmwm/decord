// Module ID: 7517
// Function ID: 60191
// Name: constants
// Dependencies: []

// Module 7517 (constants)
const obj = { messageType: true, textColor: true, textVariant: true, direction: true, LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER, LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER };
let num = 1000;
if ("android" === require(dependencyMap[0]).Platform.OS) {
  num = 128;
}
obj.DEFAULT_STEP_RESOLUTION = num;

export const constants = obj;
