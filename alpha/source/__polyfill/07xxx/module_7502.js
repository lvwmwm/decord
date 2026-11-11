// Module ID: 7502
// Function ID: 7503
// Dependencies: [7503]
// Exports: getDistanceForDirection

// Module 7502
import _mod7503 from "module_7503" /* 7503 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7503;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
