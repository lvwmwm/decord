// Module ID: 15256
// Function ID: 15257
// Dependencies: []

// Module 15256
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
