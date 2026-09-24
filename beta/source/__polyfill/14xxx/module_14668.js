// Module ID: 14668
// Function ID: 14669
// Dependencies: []

// Module 14668

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
