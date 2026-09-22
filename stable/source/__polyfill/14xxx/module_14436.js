// Module ID: 14436
// Function ID: 14437
// Dependencies: []

// Module 14436

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
