// Module ID: 13687
// Function ID: 13688
// Dependencies: []

// Module 13687

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
