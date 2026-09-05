// Module ID: 12827
// Function ID: 12828
// Name: addTracingExtensions
// Dependencies: [12793]

// Module 12827 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12793 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
