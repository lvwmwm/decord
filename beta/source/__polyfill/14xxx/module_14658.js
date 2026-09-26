// Module ID: 14658
// Function ID: 14659
// Dependencies: []

// Module 14658

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
