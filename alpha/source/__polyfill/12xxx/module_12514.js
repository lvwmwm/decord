// Module ID: 12514
// Function ID: 12515
// Dependencies: [12480]
// Exports: addTracingExtensions

// Module 12514
import errorCallback from "errorCallback" /* 12480 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
