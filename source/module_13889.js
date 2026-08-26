// Module ID: 13889
// Function ID: 13890
// Dependencies: []

// Module 13889

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
