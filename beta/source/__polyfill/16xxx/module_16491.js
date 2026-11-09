// Module ID: 16491
// Function ID: 16492
// Dependencies: []

// Module 16491
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
