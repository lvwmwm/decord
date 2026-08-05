// Module ID: 7377
// Function ID: 7378
// Name: addTracingExtensions
// Dependencies: [7343]

// Module 7377 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7343) /* errorCallback */.registerSpanErrorInstrumentation();
};
