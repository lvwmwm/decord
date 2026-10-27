// Module ID: 6984
// Function ID: 6985
// Dependencies: [6985]
// Exports: getDistanceForDirection

// Module 6984
import _mod6985 from "module_6985" /* 6985 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6985;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
