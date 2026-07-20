// Module ID: 4399
// Function ID: 38776
// Name: floor
// Dependencies: []

// Module 4399 (floor)

export default function floor(arg0) {
  let tmp = arg0;
  if ("bigint" !== typeof arg0) {
    tmp = require(dependencyMap[0])(arg0);
  }
  return tmp;
};
