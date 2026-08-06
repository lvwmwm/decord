// Module ID: 7405
// Function ID: 7406
// Name: addTracingExtensions
// Dependencies: [7371]

// Module 7405 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7371) /* errorCallback */.registerSpanErrorInstrumentation();
};
