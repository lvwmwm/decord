// Module ID: 7328
// Function ID: 7329
// Dependencies: [7329]
// Exports: getDistanceForDirection

// Module 7328
import _mod7329 from "module_7329" /* 7329 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7329;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
