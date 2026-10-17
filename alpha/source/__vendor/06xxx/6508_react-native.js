// Module ID: 6508
// Function ID: 6509
// Name: react-native
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 6508 (react-native)
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
