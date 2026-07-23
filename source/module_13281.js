// Module ID: 13281
// Function ID: 101756
// Dependencies: [13279]

// Module 13281

export default (arg0, arg1) => {
  const tmp = require(13279)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
