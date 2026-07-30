// Module ID: 13407
// Function ID: 13408
// Dependencies: []

// Module 13407

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
