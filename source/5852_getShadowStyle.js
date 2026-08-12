// Module ID: 5852
// Function ID: 5853
// Name: getShadowStyle
// Dependencies: [17]
// Exports: getShadowStyle

// Module 5852 (getShadowStyle)
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
