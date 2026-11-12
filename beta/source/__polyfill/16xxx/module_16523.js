// Module ID: 16523
// Function ID: 16524
// Dependencies: []

// Module 16523
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
