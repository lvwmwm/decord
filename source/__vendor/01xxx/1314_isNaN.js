// Module ID: 1314
// Function ID: 1315
// Name: isNaN
// Dependencies: []

// Module 1314 (isNaN)
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
