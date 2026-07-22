// Module ID: 5530
// Function ID: 47074
// Name: getDefaultHeaderHeight
// Dependencies: []
// Exports: default

// Module 5530 (getDefaultHeaderHeight)
const Platform = require(dependencyMap[0]).Platform;

export default function getDefaultHeaderHeight(arg0, arg1, arg2) {
  let height;
  let width;
  ({ width, height } = arg0);
  return 56 + arg2;
};
