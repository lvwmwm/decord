// Module ID: 7251
// Function ID: 7252
// Dependencies: [7252]
// Exports: getDistanceForDirection

// Module 7251
import _mod7252 from "module_7252" /* 7252 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7252;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
