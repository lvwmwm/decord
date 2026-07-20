// Module ID: 5529
// Function ID: 47016
// Name: getDefaultHeaderHeight
// Dependencies: []
// Exports: default

// Module 5529 (getDefaultHeaderHeight)
const Platform = require(dependencyMap[0]).Platform;

export default function getDefaultHeaderHeight(arg0, arg1, arg2) {
  let height;
  let width;
  ({ width, height } = arg0);
  return 56 + arg2;
};
