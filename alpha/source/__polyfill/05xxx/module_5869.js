// Module ID: 5869
// Function ID: 5870
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 5869
import get_ActivityIndicator from "module_17" /* 17 */;

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
