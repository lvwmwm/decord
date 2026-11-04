// Module ID: 7146
// Function ID: 7147
// Dependencies: [7147]
// Exports: getDistanceForDirection

// Module 7146
import _mod7147 from "module_7147" /* 7147 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7147;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
