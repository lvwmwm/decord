// Module ID: 13935
// Function ID: 13936
// Dependencies: []

// Module 13935

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
