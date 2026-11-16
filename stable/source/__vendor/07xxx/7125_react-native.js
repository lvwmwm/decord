// Module ID: 7125
// Function ID: 7126
// Name: react-native
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 7125 (react-native)
import react_native from "react-native" /* 17 */;

let PixelRatio;
let Platform;
({ PixelRatio, Platform } = react_native);

export function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  let height;
  let width;
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
}
