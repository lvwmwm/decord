// Module ID: 6231
// Function ID: 6232
// Name: react-native
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 6231 (react-native)
import react_native from "react-native" /* 17 */;

let PixelRatio;
let Platform;
({ PixelRatio, Platform } = react_native);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  let height;
  let width;
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
