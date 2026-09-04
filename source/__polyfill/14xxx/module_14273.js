// Module ID: 14273
// Function ID: 14274
// Dependencies: []

// Module 14273

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
