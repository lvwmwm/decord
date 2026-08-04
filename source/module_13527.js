// Module ID: 13527
// Function ID: 13528
// Dependencies: []

// Module 13527

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
