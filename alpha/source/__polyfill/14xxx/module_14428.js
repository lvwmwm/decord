// Module ID: 14428
// Function ID: 14429
// Dependencies: []

// Module 14428
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
