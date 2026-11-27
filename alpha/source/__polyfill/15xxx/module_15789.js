// Module ID: 15789
// Function ID: 15790
// Dependencies: []

// Module 15789
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
