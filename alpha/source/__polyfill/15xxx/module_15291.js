// Module ID: 15291
// Function ID: 15292
// Dependencies: []

// Module 15291
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
