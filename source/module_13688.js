// Module ID: 13688
// Function ID: 13689
// Dependencies: []

// Module 13688

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
