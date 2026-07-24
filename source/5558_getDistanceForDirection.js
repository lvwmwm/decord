// Module ID: 5558
// Function ID: 47218
// Name: getDistanceForDirection
// Dependencies: [5557]

// Module 5558 (getDistanceForDirection)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getDistanceForDirection(width) {
  const tmp = module(5557)(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
