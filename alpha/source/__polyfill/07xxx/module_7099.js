// Module ID: 7099
// Function ID: 7100
// Dependencies: [7100]
// Exports: getDistanceForDirection

// Module 7099
import _mod7100 from "module_7100" /* 7100 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7100;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
