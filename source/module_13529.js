// Module ID: 13529
// Function ID: 13530
// Dependencies: [13527]

// Module 13529

export default (arg0, arg1) => {
  const tmp = require(13527)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
