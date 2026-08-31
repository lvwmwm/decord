// Module ID: 12332
// Function ID: 12333
// Name: addTracingExtensions
// Dependencies: [12298]

// Module 12332 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12298 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
