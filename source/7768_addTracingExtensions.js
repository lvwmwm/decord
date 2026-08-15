// Module ID: 7768
// Function ID: 7769
// Name: addTracingExtensions
// Dependencies: [7734]

// Module 7768 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7734) /* errorCallback */.registerSpanErrorInstrumentation();
};
