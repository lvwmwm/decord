// Module ID: 6401
// Function ID: 6402
// Name: addTracingExtensions
// Dependencies: [6367]

// Module 6401 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(6367) /* errorCallback */.registerSpanErrorInstrumentation();
};
