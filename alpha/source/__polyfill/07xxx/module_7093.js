// Module ID: 7093
// Function ID: 7094
// Dependencies: [7094]
// Exports: getDistanceForDirection

// Module 7093
import _mod7094 from "module_7094" /* 7094 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7094;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
