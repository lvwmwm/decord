// Module ID: 13131
// Function ID: 99531
// Dependencies: []

// Module 13131

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
