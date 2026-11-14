// Module ID: 16797
// Function ID: 16798
// Dependencies: []

// Module 16797
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
