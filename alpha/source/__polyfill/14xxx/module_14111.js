// Module ID: 14111
// Function ID: 14112
// Dependencies: []

// Module 14111
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
