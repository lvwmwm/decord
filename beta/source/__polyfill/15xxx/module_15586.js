// Module ID: 15586
// Function ID: 15587
// Dependencies: []

// Module 15586
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
