// Module ID: 16433
// Function ID: 16434
// Dependencies: []

// Module 16433
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
