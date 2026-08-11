// Module ID: 13630
// Function ID: 13631
// Dependencies: []

// Module 13630

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
