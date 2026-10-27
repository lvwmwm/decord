// Module ID: 15631
// Function ID: 15632
// Dependencies: []

// Module 15631
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
