// Module ID: 6707
// Function ID: 6708
// Dependencies: [6708]
// Exports: getDistanceForDirection

// Module 6707
import _mod6708 from "module_6708" /* 6708 */;


export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod6708;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
