// Module ID: 7193
// Function ID: 7194
// Name: react-native
// Dependencies: [17]
// Exports: getShadowStyle

// Module 7193 (react-native)
import react_native from "react-native" /* 17 */;

const Platform = react_native.Platform;

export function getShadowStyle(color) {
  let offset;
  let opacity;
  let radius;
  let shadowColor = color.color;
  ({ offset, radius, opacity } = color);
  if (shadowColor === undefined) {
    shadowColor = "#000";
  }
  return { shadowOffset, shadowRadius, shadowColor, shadowOpacity };
}
