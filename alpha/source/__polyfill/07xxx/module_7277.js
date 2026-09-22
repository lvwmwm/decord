// Module ID: 7277
// Function ID: 7278
// Dependencies: [17]
// Exports: getShadowStyle

// Module 7277
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
