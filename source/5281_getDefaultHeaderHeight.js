// Module ID: 5281
// Function ID: 5282
// Name: getDefaultHeaderHeight
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 5281 (getDefaultHeaderHeight)
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
