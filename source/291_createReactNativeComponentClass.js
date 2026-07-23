// Module ID: 291
// Function ID: 4486
// Name: createReactNativeComponentClass
// Dependencies: [261]
// Exports: default

// Module 291 (createReactNativeComponentClass)
const register = require("get BatchedBridge").ReactNativeViewConfigRegistry.register;

export default function createReactNativeComponentClass(arg0, arg1) {
  return register(arg0, arg1);
};
