// Module ID: 16178
// Function ID: 16179
// Dependencies: []

// Module 16178
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
