// Module ID: 1339
// Function ID: 1340
// Dependencies: []

// Module 1339
const isNaN = Number.isNaN || (function isNaN(arg0) {
  return arg0 != arg0;
});

export default isNaN;
