// Module ID: 7061
// Function ID: 7062
// Name: react-native
// Dependencies: [17]
// Exports: getShadowStyle

// Module 7061 (react-native)
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
