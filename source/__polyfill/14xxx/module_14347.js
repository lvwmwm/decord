// Module ID: 14347
// Function ID: 14348
// Dependencies: []

// Module 14347

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
