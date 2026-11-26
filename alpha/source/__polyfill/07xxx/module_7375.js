// Module ID: 7375
// Function ID: 7376
// Dependencies: [7376]
// Exports: getDistanceForDirection

// Module 7375
import _mod7376 from "module_7376" /* 7376 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7376;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
