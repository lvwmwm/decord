// Module ID: 13080
// Function ID: 13081
// Dependencies: [13046]
// Exports: addTracingExtensions

// Module 13080
import errorCallback from "errorCallback" /* 13046 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
