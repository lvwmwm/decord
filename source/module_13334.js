// Module ID: 13334
// Function ID: 102083
// Dependencies: [13332]

// Module 13334

export default (arg0, arg1) => {
  const tmp = require(13332)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
