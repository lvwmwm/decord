// Module ID: 13346
// Function ID: 102215
// Dependencies: [13344]

// Module 13346

export default (arg0, arg1) => {
  const tmp = require(13344)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
