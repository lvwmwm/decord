// Module ID: 7081
// Function ID: 7082
// Dependencies: [7082]
// Exports: getDistanceForDirection

// Module 7081
import _mod7082 from "module_7082" /* 7082 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7082;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
