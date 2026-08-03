// Module ID: 7393
// Function ID: 7394
// Name: addTracingExtensions
// Dependencies: [7359]

// Module 7393 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7359) /* errorCallback */.registerSpanErrorInstrumentation();
};
