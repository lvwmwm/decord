// Module ID: 13500
// Function ID: 13501
// Dependencies: [13498]

// Module 13500

export default (arg0, arg1) => {
  const tmp = require(13498)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
