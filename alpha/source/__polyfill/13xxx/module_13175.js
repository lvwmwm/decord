// Module ID: 13175
// Function ID: 13176
// Dependencies: [13141]
// Exports: addTracingExtensions

// Module 13175
import errorCallback from "errorCallback" /* 13141 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
