// Module ID: 6160
// Function ID: 6161
// Dependencies: [17]
// Exports: getDefaultHeaderHeight

// Module 6160
import get_ActivityIndicator from "module_17" /* 17 */;

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
