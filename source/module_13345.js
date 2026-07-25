// Module ID: 13345
// Function ID: 102210
// Dependencies: [13343]

// Module 13345

export default (arg0, arg1) => {
  const tmp = require(13343)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
