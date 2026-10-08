// Module ID: 6698
// Function ID: 6699
// Dependencies: [6699]
// Exports: getDistanceForDirection

// Module 6698
import _mod6699 from "module_6699" /* 6699 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6699;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
