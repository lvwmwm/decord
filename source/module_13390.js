// Module ID: 13390
// Function ID: 102388
// Dependencies: [13388]

// Module 13390

export default (arg0, arg1) => {
  const tmp = require(13388)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
