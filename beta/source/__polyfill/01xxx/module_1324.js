// Module ID: 1324
// Function ID: 1325
// Dependencies: []

// Module 1324
const isNaN = Number.isNaN || (function isNaN(arg0) {
  return arg0 != arg0;
});

export default isNaN;
