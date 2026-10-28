// Module ID: 15629
// Function ID: 15630
// Dependencies: []

// Module 15629
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
