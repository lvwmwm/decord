// Module ID: 6959
// Function ID: 6960
// Name: getDistanceForDirection
// Dependencies: [6960]

// Module 6959 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 6960 */;

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
