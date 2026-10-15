// Module ID: 6927
// Function ID: 6928
// Dependencies: [6928]
// Exports: getDistanceForDirection

// Module 6927
import _mod6928 from "module_6928" /* 6928 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6928;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
