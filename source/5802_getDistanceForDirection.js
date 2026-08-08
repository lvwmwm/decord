// Module ID: 5802
// Function ID: 5803
// Name: getDistanceForDirection
// Dependencies: [5803]

// Module 5802 (getDistanceForDirection)
const require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = require(5803) /* getInvertedMultiplier */.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};
