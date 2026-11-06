// Module ID: 7275
// Function ID: 7276
// Dependencies: [7276]
// Exports: getDistanceForDirection

// Module 7275
import _mod7276 from "module_7276" /* 7276 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7276;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
