// Module ID: 7254
// Function ID: 7255
// Dependencies: [7255]
// Exports: getDistanceForDirection

// Module 7254
import _mod7255 from "module_7255" /* 7255 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7255;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
