// Module ID: 7050
// Function ID: 7051
// Dependencies: [7051]
// Exports: getDistanceForDirection

// Module 7050
import _mod7051 from "module_7051" /* 7051 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7051;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
