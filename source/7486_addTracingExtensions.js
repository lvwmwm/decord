// Module ID: 7486
// Function ID: 7487
// Name: addTracingExtensions
// Dependencies: [7452]

// Module 7486 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7452) /* errorCallback */.registerSpanErrorInstrumentation();
};
