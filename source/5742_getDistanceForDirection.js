// Module ID: 5742
// Function ID: 5743
// Name: getDistanceForDirection
// Dependencies: [5743]

// Module 5742 (getDistanceForDirection)
const require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = require(5743) /* getInvertedMultiplier */.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};
