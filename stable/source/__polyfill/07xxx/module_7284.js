// Module ID: 7284
// Function ID: 7285
// Dependencies: [7285]
// Exports: getDistanceForDirection

// Module 7284
import _mod7285 from "module_7285" /* 7285 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7285;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
