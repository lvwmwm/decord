// Module ID: 13494
// Function ID: 13495
// Dependencies: []

// Module 13494

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
