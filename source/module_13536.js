// Module ID: 13536
// Function ID: 13537
// Dependencies: []

// Module 13536

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
