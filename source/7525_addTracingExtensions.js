// Module ID: 7525
// Function ID: 7526
// Name: addTracingExtensions
// Dependencies: [7491]

// Module 7525 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7491) /* errorCallback */.registerSpanErrorInstrumentation();
};
