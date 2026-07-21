// Module ID: 4403
// Function ID: 38824
// Name: floor
// Dependencies: []

// Module 4403 (floor)

export default function floor(arg0) {
  let tmp = arg0;
  if ("bigint" !== typeof arg0) {
    tmp = require(dependencyMap[0])(arg0);
  }
  return tmp;
};
