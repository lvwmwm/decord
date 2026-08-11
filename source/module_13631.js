// Module ID: 13631
// Function ID: 13632
// Dependencies: [13629]

// Module 13631

export default (arg0, arg1) => {
  const tmp = require(13629)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
