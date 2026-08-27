// Module ID: 7693
// Function ID: 7694
// Name: addTracingExtensions
// Dependencies: [7659]

// Module 7693 (addTracingExtensions)
import errorCallback from "errorCallback" /* 7659 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
