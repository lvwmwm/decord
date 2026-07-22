// Module ID: 4246
// Function ID: 37313
// Name: baseAssignIn
// Dependencies: [0, 0]

// Module 4246 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(dependencyMap[0])(arg1, require(dependencyMap[1])(arg1), arg0);
    const tmp4 = require(dependencyMap[0]);
  }
  return tmp;
};
