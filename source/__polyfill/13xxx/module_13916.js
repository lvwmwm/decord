// Module ID: 13916
// Function ID: 13917
// Dependencies: []

// Module 13916

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
