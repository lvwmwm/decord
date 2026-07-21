// Module ID: 5558
// Function ID: 47190
// Name: getDistanceForDirection
// Dependencies: []

// Module 5558 (getDistanceForDirection)
arg5.default = function getDistanceForDirection(width) {
  const tmp = arg2(arg6[0])(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
