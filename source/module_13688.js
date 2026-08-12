// Module ID: 13688
// Function ID: 13689
// Dependencies: [13686]

// Module 13688

export default (arg0, arg1) => {
  const tmp = require(13686)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
