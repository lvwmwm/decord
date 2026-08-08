// Module ID: 13620
// Function ID: 13621
// Dependencies: []

// Module 13620

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
