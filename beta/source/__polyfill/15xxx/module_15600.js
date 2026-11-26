// Module ID: 15600
// Function ID: 15601
// Dependencies: []

// Module 15600
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
