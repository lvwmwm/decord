// Module ID: 6398
// Function ID: 6399
// Name: addTracingExtensions
// Dependencies: [6364]

// Module 6398 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(6364) /* errorCallback */.registerSpanErrorInstrumentation();
};
