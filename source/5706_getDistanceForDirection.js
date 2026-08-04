// Module ID: 5706
// Function ID: 5707
// Name: getDistanceForDirection
// Dependencies: [5705]

// Module 5706 (getDistanceForDirection)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getDistanceForDirection(width) {
  const tmp = module(5705)(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
