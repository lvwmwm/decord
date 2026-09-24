// Module ID: 13115
// Function ID: 13116
// Dependencies: [13081]
// Exports: addTracingExtensions

// Module 13115
import errorCallback from "errorCallback" /* 13081 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
