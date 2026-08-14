// Module ID: 13691
// Function ID: 13692
// Dependencies: []

// Module 13691

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
