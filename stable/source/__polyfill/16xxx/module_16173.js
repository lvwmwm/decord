// Module ID: 16173
// Function ID: 16174
// Dependencies: []

// Module 16173
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
