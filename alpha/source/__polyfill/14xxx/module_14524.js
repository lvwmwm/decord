// Module ID: 14524
// Function ID: 14525
// Dependencies: []

// Module 14524
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
