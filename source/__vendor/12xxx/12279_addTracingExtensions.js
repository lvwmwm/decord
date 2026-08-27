// Module ID: 12279
// Function ID: 12280
// Name: addTracingExtensions
// Dependencies: [12245]

// Module 12279 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12245 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
