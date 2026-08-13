// Module ID: 5842
// Function ID: 5843
// Name: getDistanceForDirection
// Dependencies: [5843]

// Module 5842 (getDistanceForDirection)
const require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = require(5843) /* getInvertedMultiplier */.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};
