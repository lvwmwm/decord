// Module ID: 7116
// Function ID: 7117
// Dependencies: [7117]
// Exports: getDistanceForDirection

// Module 7116
import _mod7117 from "module_7117" /* 7117 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7117;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
