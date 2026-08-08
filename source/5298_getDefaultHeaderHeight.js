// Module ID: 5298
// Function ID: 5299
// Name: getDefaultHeaderHeight
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 5298 (getDefaultHeaderHeight)
import get_ActivityIndicator from "get ActivityIndicator";

let PixelRatio;
let Platform;
({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, closure_0, headerStatusBarHeight) {
  let height;
  let width;
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
