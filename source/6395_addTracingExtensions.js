// Module ID: 6395
// Function ID: 6396
// Name: addTracingExtensions
// Dependencies: [6361]

// Module 6395 (addTracingExtensions)
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(6361) /* errorCallback */.registerSpanErrorInstrumentation();
};
