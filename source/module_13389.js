// Module ID: 13389
// Function ID: 102386
// Dependencies: []

// Module 13389

export default Math.trunc || (function trunc(arg0) {
  return +arg0 > 0 ? floor : ceil(+arg0);
});
