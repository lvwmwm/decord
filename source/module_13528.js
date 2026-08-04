// Module ID: 13528
// Function ID: 13529
// Dependencies: [13526]

// Module 13528

export default (arg0, arg1) => {
  const tmp = require(13526)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
