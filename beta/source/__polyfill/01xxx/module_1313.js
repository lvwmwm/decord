// Module ID: 1313
// Function ID: 1314
// Dependencies: []

// Module 1313
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
