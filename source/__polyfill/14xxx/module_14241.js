// Module ID: 14241
// Function ID: 14242
// Dependencies: []

// Module 14241

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
