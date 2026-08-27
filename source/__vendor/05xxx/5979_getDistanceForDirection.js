// Module ID: 5979
// Function ID: 5980
// Name: getDistanceForDirection
// Dependencies: [5980]

// Module 5979 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 5980 */;

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
