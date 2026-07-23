// Module ID: 13999
// Function ID: 107197
// Name: useYouBarTotalHeight
// Dependencies: [13997, 13996, 14000, 2]
// Exports: useYouBarTotalHeight

// Module 13999 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(13996) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(13996) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14000) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
