// Module ID: 13109
// Function ID: 13110
// Dependencies: [13075]
// Exports: addTracingExtensions

// Module 13109
import errorCallback from "errorCallback" /* 13075 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
