// Module ID: 13623
// Function ID: 13624
// Dependencies: [13621]

// Module 13623

export default (arg0, arg1) => {
  const tmp = require(13621)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
