// Module ID: 13537
// Function ID: 13538
// Dependencies: [13535]

// Module 13537

export default (arg0, arg1) => {
  const tmp = require(13535)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
