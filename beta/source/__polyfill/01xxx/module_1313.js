// Module ID: 1313
// Function ID: 1314
// Dependencies: []

// Module 1313
const isNaN = Number.isNaN || (function isNaN(arg0) {
  return arg0 != arg0;
});

export default isNaN;
