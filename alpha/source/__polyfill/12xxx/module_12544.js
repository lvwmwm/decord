// Module ID: 12544
// Function ID: 12545
// Dependencies: [12510]
// Exports: addTracingExtensions

// Module 12544
import errorCallback from "errorCallback" /* 12510 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
