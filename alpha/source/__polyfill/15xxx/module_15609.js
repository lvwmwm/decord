// Module ID: 15609
// Function ID: 15610
// Dependencies: []

// Module 15609
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
