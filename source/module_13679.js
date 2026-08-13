// Module ID: 13679
// Function ID: 13680
// Dependencies: []

// Module 13679

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
