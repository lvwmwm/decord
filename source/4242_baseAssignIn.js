// Module ID: 4242
// Function ID: 37249
// Name: baseAssignIn
// Dependencies: []

// Module 4242 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(dependencyMap[0])(arg1, require(dependencyMap[1])(arg1), arg0);
    const tmp4 = require(dependencyMap[0]);
  }
  return tmp;
};
