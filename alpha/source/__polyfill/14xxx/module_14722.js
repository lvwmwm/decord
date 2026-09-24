// Module ID: 14722
// Function ID: 14723
// Dependencies: []

// Module 14722

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
