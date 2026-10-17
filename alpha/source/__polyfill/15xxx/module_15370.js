// Module ID: 15370
// Function ID: 15371
// Dependencies: []

// Module 15370
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
