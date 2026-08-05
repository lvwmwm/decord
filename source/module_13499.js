// Module ID: 13499
// Function ID: 13500
// Dependencies: []

// Module 13499

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
