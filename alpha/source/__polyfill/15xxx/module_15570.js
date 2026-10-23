// Module ID: 15570
// Function ID: 15571
// Dependencies: []

// Module 15570
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
