// Module ID: 14219
// Function ID: 14220
// Name: useYouBarTotalHeight
// Dependencies: [14217, 14216, 14220, 2]
// Exports: useYouBarTotalHeight

// Module 14219 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14216) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14216) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14220) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
