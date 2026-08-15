// Module ID: 6540
// Function ID: 6541
// Name: getShadowStyle
// Dependencies: [17]
// Exports: getShadowStyle

// Module 6540 (getShadowStyle)
import { Platform } from "get ActivityIndicator";


export const getShadowStyle = function getShadowStyle(color) {
  let offset;
  let opacity;
  let radius;
  let shadowColor = color.color;
  ({ offset, radius, opacity } = color);
  if (shadowColor === undefined) {
    shadowColor = "#000";
  }
  return { shadowOffset, shadowRadius, shadowColor, shadowOpacity };
};
