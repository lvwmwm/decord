// Module ID: 13969
// Function ID: 13970
// Dependencies: []

// Module 13969

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
