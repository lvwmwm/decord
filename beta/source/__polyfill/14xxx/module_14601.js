// Module ID: 14601
// Function ID: 14602
// Dependencies: []

// Module 14601
const tmp = Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});

export default tmp;
