// Module ID: 13115
// Function ID: 99453
// Dependencies: []

// Module 13115

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
