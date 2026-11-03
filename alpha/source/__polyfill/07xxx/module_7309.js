// Module ID: 7309
// Function ID: 7310
// Dependencies: [7310]
// Exports: getDistanceForDirection

// Module 7309
import _mod7310 from "module_7310" /* 7310 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7310;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
