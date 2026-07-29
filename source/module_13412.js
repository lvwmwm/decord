// Module ID: 13412
// Function ID: 13413
// Dependencies: []

// Module 13412

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
