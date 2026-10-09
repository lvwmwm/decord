// Module ID: 1337
// Function ID: 1338
// Dependencies: []

// Module 1337
const isNaN = Number.isNaN || (function isNaN(arg0) {
  return arg0 != arg0;
});

export default isNaN;
