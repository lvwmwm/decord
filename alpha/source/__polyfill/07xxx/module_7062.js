// Module ID: 7062
// Function ID: 7063
// Dependencies: [7063]
// Exports: getDistanceForDirection

// Module 7062
import _mod7063 from "module_7063" /* 7063 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7063;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
