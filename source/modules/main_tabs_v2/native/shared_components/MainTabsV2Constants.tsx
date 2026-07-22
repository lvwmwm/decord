// Module ID: 9116
// Function ID: 71420
// Name: MIN_HEADER_HEIGHT
// Dependencies: [0, 0, 0]
// Exports: getMinHeaderHeight

// Module 9116 (MIN_HEADER_HEIGHT)
const result = 2 * require("__exportStarResult1").StyleSheet.hairlineWidth;
const result1 = require("__exportStarResult1").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MainTabsV2Constants.tsx");

export const MIN_HEADER_HEIGHT = 56;
export const HEADER_CORNER_RADIUS = 8;
export const getMinHeaderHeight = function getMinHeaderHeight(YouBannerDecorations) {
  let num = 56;
  if (obj.isMobileVisualRefreshEnabled(YouBannerDecorations)) {
    num = 64;
  }
  return num;
};
export const MIDNIGHT_BORDER_WIDTH = result;
