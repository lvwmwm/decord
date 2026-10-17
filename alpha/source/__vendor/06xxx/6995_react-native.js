// Module ID: 6995
// Function ID: 6996
// Name: react-native
// Dependencies: [17]
// Exports: getShadowStyle

// Module 6995 (react-native)
import react_native from "react-native" /* 17 */;

const Platform = react_native.Platform;

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
