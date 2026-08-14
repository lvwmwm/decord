// Module ID: 7550
// Function ID: 7551
// Name: addTracingExtensions
// Dependencies: [7516]

// Module 7550 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7516) /* errorCallback */.registerSpanErrorInstrumentation();
};
