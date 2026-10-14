// Module ID: 6711
// Function ID: 6712
// Dependencies: [6712]
// Exports: getDistanceForDirection

// Module 6711
import _mod6712 from "module_6712" /* 6712 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6712;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
