// Module ID: 5863
// Function ID: 5864
// Name: getDistanceForDirection
// Dependencies: [5864]

// Module 5863 (getDistanceForDirection)
const require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = require(5864) /* getInvertedMultiplier */.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};
