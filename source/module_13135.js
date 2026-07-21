// Module ID: 13135
// Function ID: 99499
// Dependencies: []

// Module 13135

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
