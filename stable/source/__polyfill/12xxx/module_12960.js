// Module ID: 12960
// Function ID: 12961
// Dependencies: [12926]
// Exports: addTracingExtensions

// Module 12960
import errorCallback from "errorCallback" /* 12926 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
