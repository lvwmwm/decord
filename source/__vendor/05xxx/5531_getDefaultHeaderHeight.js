// Module ID: 5531
// Function ID: 5532
// Name: getDefaultHeaderHeight
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 5531 (getDefaultHeaderHeight)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
