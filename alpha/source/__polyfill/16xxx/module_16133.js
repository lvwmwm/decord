// Module ID: 16133
// Function ID: 16134
// Dependencies: []

// Module 16133
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
