// Module ID: 15731
// Function ID: 15732
// Dependencies: []

// Module 15731
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
