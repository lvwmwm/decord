// Module ID: 705
// Function ID: 8709
// Name: castPath
// Dependencies: []

// Module 705 (castPath)

export default function castPath(arg0, arg1) {
  if (require(dependencyMap[0])(arg0)) {
    return arg0;
  } else if (require(dependencyMap[1])(arg0, arg1)) {
    const items = [arg0];
    let tmp6Result = items;
  } else {
    tmp6Result = require(dependencyMap[2])(require(dependencyMap[3])(arg0));
    const tmp6 = require(dependencyMap[2]);
  }
};
