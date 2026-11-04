// Module ID: 7325
// Function ID: 7326
// Dependencies: [7326]
// Exports: getDistanceForDirection

// Module 7325
import _mod7326 from "module_7326" /* 7326 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7326;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
