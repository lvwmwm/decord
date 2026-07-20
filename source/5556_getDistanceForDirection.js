// Module ID: 5556
// Function ID: 47140
// Name: getDistanceForDirection
// Dependencies: []

// Module 5556 (getDistanceForDirection)
arg5.default = function getDistanceForDirection(width) {
  const tmp = arg2(arg6[0])(arg1);
  if ("vertical" !== arg1) {
    if ("vertical-inverted" !== arg1) {
      return width.width * tmp;
    }
  }
  return width.height * tmp;
};
