// Module ID: 16520
// Function ID: 16521
// Dependencies: []

// Module 16520
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
