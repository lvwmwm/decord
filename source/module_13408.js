// Module ID: 13408
// Function ID: 13409
// Dependencies: [13406]

// Module 13408

export default (arg0, arg1) => {
  const tmp = require(13406)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
