// Module ID: 16481
// Function ID: 16482
// Dependencies: []

// Module 16481
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
