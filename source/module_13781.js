// Module ID: 13781
// Function ID: 13782
// Dependencies: []

// Module 13781

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
