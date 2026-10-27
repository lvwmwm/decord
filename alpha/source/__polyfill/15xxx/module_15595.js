// Module ID: 15595
// Function ID: 15596
// Dependencies: []

// Module 15595
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
