// Module ID: 13122
// Function ID: 99476
// Dependencies: []

// Module 13122

export default (arg0, arg1) => {
  let obj = arg1;
  let tmp = require(dependencyMap[0])[arg0];
  if (!tmp) {
    if (!obj) {
      obj = {};
    }
    require(dependencyMap[0])[arg0] = obj;
    tmp = obj;
    const tmp4 = require(dependencyMap[0]);
  }
  return tmp;
};
