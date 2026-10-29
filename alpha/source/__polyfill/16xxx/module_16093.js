// Module ID: 16093
// Function ID: 16094
// Dependencies: []

// Module 16093
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
