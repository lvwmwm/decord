// Module ID: 7249
// Function ID: 7250
// Dependencies: [7250]
// Exports: getDistanceForDirection

// Module 7249
import _mod7250 from "module_7250" /* 7250 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7250;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
