// Module ID: 13680
// Function ID: 13681
// Dependencies: [13678]

// Module 13680

export default (arg0, arg1) => {
  const tmp = require(13678)(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
