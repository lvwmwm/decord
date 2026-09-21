// Module ID: 14627
// Function ID: 14628
// Dependencies: []

// Module 14627

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
