// Module ID: 6931
// Function ID: 6932
// Dependencies: [6932]
// Exports: getDistanceForDirection

// Module 6931
import _mod6932 from "module_6932" /* 6932 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6932;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
