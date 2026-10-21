// Module ID: 15492
// Function ID: 15493
// Dependencies: []

// Module 15492
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
