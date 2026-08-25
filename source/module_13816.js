// Module ID: 13816
// Function ID: 13817
// Dependencies: []

// Module 13816

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
