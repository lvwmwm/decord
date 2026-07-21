// Module ID: 13137
// Function ID: 99521
// Dependencies: []

// Module 13137

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp9 = require(dependencyMap[1])[arg0];
    let tmp10;
    if (require(dependencyMap[0])(tmp9)) {
      tmp10 = tmp9;
    }
    let tmp3 = tmp10;
  } else {
    tmp3 = require(dependencyMap[1])[arg0];
    if (tmp3) {
      tmp3 = require(dependencyMap[1])[arg0][arg1];
    }
  }
  return tmp3;
};
