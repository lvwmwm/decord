// Module ID: 5974
// Function ID: 5975
// Name: getDistanceForDirection
// Dependencies: [5975]

// Module 5974 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 5975 */;

require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = getInvertedMultiplier.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};
