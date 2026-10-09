// Module ID: 6705
// Function ID: 6706
// Dependencies: [6706]
// Exports: getDistanceForDirection

// Module 6705
import _mod6706 from "module_6706" /* 6706 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6706;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
