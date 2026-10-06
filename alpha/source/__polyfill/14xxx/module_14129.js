// Module ID: 14129
// Function ID: 14130
// Dependencies: []

// Module 14129
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
