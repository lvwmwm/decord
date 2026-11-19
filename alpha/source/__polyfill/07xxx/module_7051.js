// Module ID: 7051
// Function ID: 7052
// Dependencies: [7052]
// Exports: getDistanceForDirection

// Module 7051
import _mod7052 from "module_7052" /* 7052 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7052;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
