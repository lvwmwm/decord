// Module ID: 15588
// Function ID: 15589
// Dependencies: []

// Module 15588
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
