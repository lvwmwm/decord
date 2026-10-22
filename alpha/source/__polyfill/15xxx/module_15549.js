// Module ID: 15549
// Function ID: 15550
// Dependencies: []

// Module 15549
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
