// Module ID: 13167
// Function ID: 99600
// Name: __exportStarResult1
// Dependencies: [0]

// Module 13167 (__exportStarResult1)

export default (arg0, arg1) => {
  const tmp = require(dependencyMap[0])(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
