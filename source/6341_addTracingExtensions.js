// Module ID: 6341
// Function ID: 57010
// Name: addTracingExtensions
// Dependencies: [6307]

// Module 6341 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(6307) /* errorCallback */.registerSpanErrorInstrumentation();
};
