// Module ID: 5995
// Function ID: 5996
// Name: getDistanceForDirection
// Dependencies: [5996]

// Module 5995 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 5996 */;

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
