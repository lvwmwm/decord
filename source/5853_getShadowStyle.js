// Module ID: 5853
// Function ID: 5854
// Name: getShadowStyle
// Dependencies: [17]
// Exports: getShadowStyle

// Module 5853 (getShadowStyle)
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
