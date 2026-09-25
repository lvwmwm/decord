// Module ID: 13883
// Function ID: 13884
// Dependencies: []

// Module 13883

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
