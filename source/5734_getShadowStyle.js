// Module ID: 5734
// Function ID: 5735
// Name: getShadowStyle
// Dependencies: [17]
// Exports: getShadowStyle

// Module 5734 (getShadowStyle)
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
