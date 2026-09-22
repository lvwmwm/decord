// Module ID: 13084
// Function ID: 13085
// Dependencies: [13050]
// Exports: addTracingExtensions

// Module 13084
import errorCallback from "errorCallback" /* 13050 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
