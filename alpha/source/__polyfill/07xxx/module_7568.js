// Module ID: 7568
// Function ID: 7569
// Dependencies: [7569]
// Exports: getDistanceForDirection

// Module 7568
import _mod7569 from "module_7569" /* 7569 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7569;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
