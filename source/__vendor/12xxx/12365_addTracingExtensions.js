// Module ID: 12365
// Function ID: 12366
// Name: addTracingExtensions
// Dependencies: [12331]

// Module 12365 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12331 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
