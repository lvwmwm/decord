// Module ID: 1317
// Function ID: 1318
// Dependencies: []

// Module 1317
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;
