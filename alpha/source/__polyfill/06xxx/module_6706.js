// Module ID: 6706
// Function ID: 6707
// Dependencies: [6707]
// Exports: getDistanceForDirection

// Module 6706
import _mod6707 from "module_6707" /* 6707 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6707;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
