// Module ID: 12555
// Function ID: 12556
// Dependencies: [12521]
// Exports: addTracingExtensions

// Module 12555
import errorCallback from "errorCallback" /* 12521 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
