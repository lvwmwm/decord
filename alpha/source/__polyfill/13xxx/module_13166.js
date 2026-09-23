// Module ID: 13166
// Function ID: 13167
// Dependencies: [13132]
// Exports: addTracingExtensions

// Module 13166
import errorCallback from "errorCallback" /* 13132 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
