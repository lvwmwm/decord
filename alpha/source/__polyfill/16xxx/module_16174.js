// Module ID: 16174
// Function ID: 16175
// Dependencies: []

// Module 16174
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
