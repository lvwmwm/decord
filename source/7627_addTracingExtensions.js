// Module ID: 7627
// Function ID: 7628
// Name: addTracingExtensions
// Dependencies: [7593]

// Module 7627 (addTracingExtensions)
import errorCallback from "errorCallback" /* 7593 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
