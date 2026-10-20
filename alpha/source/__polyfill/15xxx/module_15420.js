// Module ID: 15420
// Function ID: 15421
// Dependencies: []

// Module 15420
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
