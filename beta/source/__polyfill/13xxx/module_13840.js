// Module ID: 13840
// Function ID: 13841
// Dependencies: []

// Module 13840
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
