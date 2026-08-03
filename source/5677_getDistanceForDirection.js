// Module ID: 5677
// Function ID: 5678
// Name: getDistanceForDirection
// Dependencies: [5676]

// Module 5677 (getDistanceForDirection)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getDistanceForDirection(width) {
  const tmp = module(5676)(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
