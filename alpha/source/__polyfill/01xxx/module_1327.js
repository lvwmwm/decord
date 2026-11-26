// Module ID: 1327
// Function ID: 1328
// Dependencies: []

// Module 1327
const isNaN = Number.isNaN || (function isNaN(arg0) {
  return arg0 != arg0;
});

export default isNaN;
