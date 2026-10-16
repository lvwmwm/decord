// Module ID: 14606
// Function ID: 14607
// Dependencies: []

// Module 14606
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
