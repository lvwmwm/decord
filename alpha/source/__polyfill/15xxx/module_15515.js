// Module ID: 15515
// Function ID: 15516
// Dependencies: []

// Module 15515
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
