// Module ID: 15596
// Function ID: 15597
// Dependencies: []

// Module 15596
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
