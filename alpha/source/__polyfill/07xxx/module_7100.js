// Module ID: 7100
// Function ID: 7101
// Dependencies: [7101]
// Exports: getDistanceForDirection

// Module 7100
import _mod7101 from "module_7101" /* 7101 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7101;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
