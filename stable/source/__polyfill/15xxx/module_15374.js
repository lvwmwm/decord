// Module ID: 15374
// Function ID: 15375
// Dependencies: []

// Module 15374
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
