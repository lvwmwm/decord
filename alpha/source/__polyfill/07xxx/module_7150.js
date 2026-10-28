// Module ID: 7150
// Function ID: 7151
// Dependencies: [7151]
// Exports: getDistanceForDirection

// Module 7150
import _mod7151 from "module_7151" /* 7151 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7151;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
