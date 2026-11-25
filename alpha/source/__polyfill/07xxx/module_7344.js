// Module ID: 7344
// Function ID: 7345
// Dependencies: [7345]
// Exports: getDistanceForDirection

// Module 7344
import _mod7345 from "module_7345" /* 7345 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7345;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
