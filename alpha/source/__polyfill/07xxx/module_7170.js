// Module ID: 7170
// Function ID: 7171
// Dependencies: [7171]
// Exports: getDistanceForDirection

// Module 7170
import _mod7171 from "module_7171" /* 7171 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7171;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
