// Module ID: 5611
// Function ID: 5612
// Name: getDistanceForDirection
// Dependencies: [5610]

// Module 5611 (getDistanceForDirection)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getDistanceForDirection(width) {
  const tmp = module(5610)(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
