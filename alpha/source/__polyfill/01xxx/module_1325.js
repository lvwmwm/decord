// Module ID: 1325
// Function ID: 1326
// Dependencies: []

// Module 1325
const isNaN = Number.isNaN || (function isNaN(arg0) {
  return arg0 != arg0;
});

export default isNaN;
