// Module ID: 13551
// Function ID: 13552
// Dependencies: [13549]

// Module 13551

export default (arg0, arg1) => {
  const tmp = require(13549)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
