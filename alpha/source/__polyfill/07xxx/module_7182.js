// Module ID: 7182
// Function ID: 7183
// Dependencies: [7183]
// Exports: getDistanceForDirection

// Module 7182
import _mod7183 from "module_7183" /* 7183 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7183;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
