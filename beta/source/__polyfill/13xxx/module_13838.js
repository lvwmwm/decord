// Module ID: 13838
// Function ID: 13839
// Dependencies: []

// Module 13838

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
