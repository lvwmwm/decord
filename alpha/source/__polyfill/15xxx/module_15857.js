// Module ID: 15857
// Function ID: 15858
// Dependencies: []

// Module 15857
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
