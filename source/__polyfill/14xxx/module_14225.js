// Module ID: 14225
// Function ID: 14226
// Dependencies: []

// Module 14225

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
