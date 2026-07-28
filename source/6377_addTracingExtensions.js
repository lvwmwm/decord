// Module ID: 6377
// Function ID: 57100
// Name: addTracingExtensions
// Dependencies: [6343]

// Module 6377 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(6343) /* errorCallback */.registerSpanErrorInstrumentation();
};
