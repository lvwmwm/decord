// Module ID: 12759
// Function ID: 12760
// Name: addTracingExtensions
// Dependencies: [12725]

// Module 12759 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12725 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
