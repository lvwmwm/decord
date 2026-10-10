// Module ID: 14578
// Function ID: 14579
// Dependencies: []

// Module 14578
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
