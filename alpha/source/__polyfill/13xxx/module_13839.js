// Module ID: 13839
// Function ID: 13840
// Dependencies: []

// Module 13839

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
