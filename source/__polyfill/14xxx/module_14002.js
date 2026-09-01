// Module ID: 14002
// Function ID: 14003
// Dependencies: []

// Module 14002

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
