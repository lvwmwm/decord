// Module ID: 14960
// Function ID: 14961
// Dependencies: []

// Module 14960
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
