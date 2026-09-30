// Module ID: 14034
// Function ID: 14035
// Dependencies: []

// Module 14034

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
