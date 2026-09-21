// Module ID: 13079
// Function ID: 13080
// Dependencies: [13045]
// Exports: addTracingExtensions

// Module 13079
import errorCallback from "errorCallback" /* 13045 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
