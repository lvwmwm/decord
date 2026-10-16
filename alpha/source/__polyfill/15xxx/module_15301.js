// Module ID: 15301
// Function ID: 15302
// Dependencies: []

// Module 15301
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
