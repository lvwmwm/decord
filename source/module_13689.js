// Module ID: 13689
// Function ID: 13690
// Dependencies: [13687]

// Module 13689

export default (arg0, arg1) => {
  const tmp = require(13687)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
