// Module ID: 7112
// Function ID: 7113
// Dependencies: [7113]
// Exports: getDistanceForDirection

// Module 7112
import _mod7113 from "module_7113" /* 7113 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7113;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
