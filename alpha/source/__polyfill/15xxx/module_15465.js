// Module ID: 15465
// Function ID: 15466
// Dependencies: []

// Module 15465
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
