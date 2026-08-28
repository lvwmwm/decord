// Module ID: 5992
// Function ID: 5993
// Name: getDistanceForDirection
// Dependencies: [5993]

// Module 5992 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 5993 */;

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
