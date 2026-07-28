// Module ID: 5593
// Function ID: 47351
// Name: getDistanceForDirection
// Dependencies: [5592]

// Module 5593 (getDistanceForDirection)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getDistanceForDirection(width) {
  const tmp = module(5592)(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
