// Module ID: 7266
// Function ID: 58529
// Name: addTracingExtensions
// Dependencies: [7232]

// Module 7266 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7232) /* errorCallback */.registerSpanErrorInstrumentation();
};
