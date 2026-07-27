// Module ID: 13345
// Function ID: 102213
// Dependencies: []

// Module 13345

export default Math.trunc || (function trunc(arg0) {
  return +arg0 > 0 ? floor : ceil(+arg0);
});
