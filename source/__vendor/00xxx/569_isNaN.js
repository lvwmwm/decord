// Module ID: 569
// Function ID: 570
// Name: isNaN
// Dependencies: []

// Module 569 (isNaN)
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
