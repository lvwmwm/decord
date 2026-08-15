// Module ID: 13724
// Function ID: 13725
// Dependencies: [13722]

// Module 13724

export default (arg0, arg1) => {
  const tmp = require(13722)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
