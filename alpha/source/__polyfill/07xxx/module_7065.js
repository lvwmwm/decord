// Module ID: 7065
// Function ID: 7066
// Dependencies: [7066]
// Exports: getDistanceForDirection

// Module 7065
import _mod7066 from "module_7066" /* 7066 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7066;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
