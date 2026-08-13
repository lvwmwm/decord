// Module ID: 7529
// Function ID: 7530
// Name: addTracingExtensions
// Dependencies: [7495]

// Module 7529 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7495) /* errorCallback */.registerSpanErrorInstrumentation();
};
