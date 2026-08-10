// Module ID: 13622
// Function ID: 13623
// Dependencies: []

// Module 13622

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
