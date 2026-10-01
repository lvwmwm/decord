// Module ID: 6440
// Function ID: 6441
// Dependencies: [6441]
// Exports: getDistanceForDirection

// Module 6440
import _mod6441 from "module_6441" /* 6441 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6441;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
