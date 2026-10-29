// Module ID: 7174
// Function ID: 7175
// Dependencies: [7175]
// Exports: getDistanceForDirection

// Module 7174
import _mod7175 from "module_7175" /* 7175 */;


export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const obj = _mod7175;
  const invertedMultiplier = obj.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}
