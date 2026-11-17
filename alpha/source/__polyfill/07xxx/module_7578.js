// Module ID: 7578
// Function ID: 7579
// Dependencies: [7579]
// Exports: getDistanceForDirection

// Module 7578
import _mod7579 from "module_7579" /* 7579 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7579;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
