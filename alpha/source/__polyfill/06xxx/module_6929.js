// Module ID: 6929
// Function ID: 6930
// Dependencies: [6930]
// Exports: getDistanceForDirection

// Module 6929
import _mod6930 from "module_6930" /* 6930 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6930;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
