// Module ID: 16436
// Function ID: 16437
// Dependencies: []

// Module 16436
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
