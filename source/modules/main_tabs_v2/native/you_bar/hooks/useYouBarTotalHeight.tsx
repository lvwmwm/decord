// Module ID: 14420
// Function ID: 14421
// Name: useYouBarTotalHeight
// Dependencies: [14418, 14417, 14421, 2]
// Exports: useYouBarTotalHeight

// Module 14420 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14417) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14417) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14421) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
