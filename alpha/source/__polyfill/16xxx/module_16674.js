// Module ID: 16674
// Function ID: 16675
// Dependencies: []

// Module 16674
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
