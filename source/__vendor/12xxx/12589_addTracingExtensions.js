// Module ID: 12589
// Function ID: 12590
// Name: addTracingExtensions
// Dependencies: [12555]

// Module 12589 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12555 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
