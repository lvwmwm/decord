// Module ID: 14007
// Function ID: 14008
// Dependencies: []

// Module 14007

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
