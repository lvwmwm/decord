// Module ID: 572
// Function ID: 573
// Name: isNaN
// Dependencies: []

// Module 572 (isNaN)
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
