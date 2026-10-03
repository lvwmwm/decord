// Module ID: 14109
// Function ID: 14110
// Dependencies: []

// Module 14109
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
