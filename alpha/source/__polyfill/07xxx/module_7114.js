// Module ID: 7114
// Function ID: 7115
// Dependencies: [7115]
// Exports: getDistanceForDirection

// Module 7114
import _mod7115 from "module_7115" /* 7115 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7115;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
