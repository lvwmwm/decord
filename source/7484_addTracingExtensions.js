// Module ID: 7484
// Function ID: 7485
// Name: addTracingExtensions
// Dependencies: [7450]

// Module 7484 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7450) /* errorCallback */.registerSpanErrorInstrumentation();
};
