// Module ID: 7296
// Function ID: 7297
// Dependencies: [7297]
// Exports: getDistanceForDirection

// Module 7296
import _mod7297 from "module_7297" /* 7297 */;

require = arg1;
const dependencyMap = arg6;

export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7297.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
