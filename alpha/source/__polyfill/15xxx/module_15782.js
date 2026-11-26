// Module ID: 15782
// Function ID: 15783
// Dependencies: []

// Module 15782
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
