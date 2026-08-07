// Module ID: 14270
// Function ID: 14271
// Name: useYouBarTotalHeight
// Dependencies: [14268, 14267, 14271, 2]
// Exports: useYouBarTotalHeight

// Module 14270 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14267) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14267) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14271) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
