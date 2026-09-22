// Module ID: 14633
// Function ID: 14634
// Dependencies: []

// Module 14633

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
