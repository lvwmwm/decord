// Module ID: 13692
// Function ID: 13693
// Dependencies: [13690]

// Module 13692

export default (arg0, arg1) => {
  const tmp = require(13690)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
