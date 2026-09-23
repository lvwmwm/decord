// Module ID: 14713
// Function ID: 14714
// Dependencies: []

// Module 14713

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
