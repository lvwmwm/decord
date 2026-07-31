// Module ID: 13431
// Function ID: 13432
// Dependencies: []

// Module 13431

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
