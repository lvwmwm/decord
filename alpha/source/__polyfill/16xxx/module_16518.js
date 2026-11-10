// Module ID: 16518
// Function ID: 16519
// Dependencies: []

// Module 16518
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
