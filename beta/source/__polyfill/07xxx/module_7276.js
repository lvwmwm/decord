// Module ID: 7276
// Function ID: 7277
// Dependencies: [17]
// Exports: getShadowStyle

// Module 7276
import _mod17 from "module_17" /* 17 */;

const Platform = _mod17.Platform;

export const getShadowStyle = function getShadowStyle(color) {
  let shadowColor = color.color;
  ({ offset, radius, opacity } = color);
  if (shadowColor === undefined) {
    shadowColor = "#000";
  }
  return { shadowOffset, shadowRadius, shadowColor, shadowOpacity };
};
