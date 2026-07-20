// Module ID: 13151
// Function ID: 99522
// Dependencies: []

// Module 13151

export default (arg0, arg1) => {
  const tmp = require(dependencyMap[0])(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
