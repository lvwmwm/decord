// Module ID: 12601
// Function ID: 12602
// Name: addTracingExtensions
// Dependencies: [12567]

// Module 12601 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12567 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
