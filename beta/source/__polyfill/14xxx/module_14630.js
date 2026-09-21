// Module ID: 14630
// Function ID: 14631
// Dependencies: []

// Module 14630

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
