// Module ID: 16321
// Function ID: 16322
// Dependencies: []

// Module 16321
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
