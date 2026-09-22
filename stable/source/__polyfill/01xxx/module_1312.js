// Module ID: 1312
// Function ID: 1313
// Dependencies: []

// Module 1312
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
