// Module ID: 13550
// Function ID: 13551
// Dependencies: []

// Module 13550

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
