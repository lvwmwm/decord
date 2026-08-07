// Module ID: 7424
// Function ID: 7425
// Name: addTracingExtensions
// Dependencies: [7390]

// Module 7424 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7390) /* errorCallback */.registerSpanErrorInstrumentation();
};
