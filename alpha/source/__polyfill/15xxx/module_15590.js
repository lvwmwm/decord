// Module ID: 15590
// Function ID: 15591
// Dependencies: []

// Module 15590
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
