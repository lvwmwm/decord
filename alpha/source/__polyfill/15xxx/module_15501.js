// Module ID: 15501
// Function ID: 15502
// Dependencies: []

// Module 15501
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
