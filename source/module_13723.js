// Module ID: 13723
// Function ID: 13724
// Dependencies: []

// Module 13723

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
