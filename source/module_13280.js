// Module ID: 13280
// Function ID: 101754
// Dependencies: []

// Module 13280

export default Math.trunc || (function trunc(arg0) {
  return +arg0 > 0 ? floor : ceil(+arg0);
});
