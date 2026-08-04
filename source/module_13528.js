// Module ID: 13528
// Function ID: 13529
// Dependencies: []

// Module 13528

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
