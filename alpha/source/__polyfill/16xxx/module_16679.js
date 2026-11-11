// Module ID: 16679
// Function ID: 16680
// Dependencies: []

// Module 16679
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
