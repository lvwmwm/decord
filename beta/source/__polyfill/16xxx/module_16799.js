// Module ID: 16799
// Function ID: 16800
// Dependencies: []

// Module 16799
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
