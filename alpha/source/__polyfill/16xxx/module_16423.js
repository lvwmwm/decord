// Module ID: 16423
// Function ID: 16424
// Dependencies: []

// Module 16423
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
