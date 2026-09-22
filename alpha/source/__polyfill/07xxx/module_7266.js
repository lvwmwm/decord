// Module ID: 7266
// Function ID: 7267
// Dependencies: [7267]
// Exports: getDistanceForDirection

// Module 7266
import _mod7267 from "module_7267" /* 7267 */;

require = arg1;
const dependencyMap = arg6;

export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7267.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
