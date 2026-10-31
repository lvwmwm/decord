// Module ID: 7188
// Function ID: 7189
// Dependencies: [7189]
// Exports: getDistanceForDirection

// Module 7188
import _mod7189 from "module_7189" /* 7189 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7189;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
