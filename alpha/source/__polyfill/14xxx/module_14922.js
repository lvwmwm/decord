// Module ID: 14922
// Function ID: 14923
// Dependencies: []

// Module 14922
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
