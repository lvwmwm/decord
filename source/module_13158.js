// Module ID: 13158
// Function ID: 99545
// Dependencies: []

// Module 13158

export default (arg0, arg1) => {
  const tmp = require(dependencyMap[0])(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
