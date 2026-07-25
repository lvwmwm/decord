// Module ID: 13344
// Function ID: 102208
// Dependencies: []

// Module 13344

export default Math.trunc || (function trunc(arg0) {
  return +arg0 > 0 ? floor : ceil(+arg0);
});
