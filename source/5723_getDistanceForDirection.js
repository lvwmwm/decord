// Module ID: 5723
// Function ID: 5724
// Name: getDistanceForDirection
// Dependencies: [5724]

// Module 5723 (getDistanceForDirection)
const require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = require(5724) /* getInvertedMultiplier */.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};
