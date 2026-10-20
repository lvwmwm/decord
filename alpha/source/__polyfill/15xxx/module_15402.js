// Module ID: 15402
// Function ID: 15403
// Dependencies: []

// Module 15402
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
