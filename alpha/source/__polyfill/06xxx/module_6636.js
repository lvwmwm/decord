// Module ID: 6636
// Function ID: 6637
// Dependencies: [6637]
// Exports: getDistanceForDirection

// Module 6636
import _mod6637 from "module_6637" /* 6637 */;

require = arg1;
const dependencyMap = arg6;

export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod6637.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
